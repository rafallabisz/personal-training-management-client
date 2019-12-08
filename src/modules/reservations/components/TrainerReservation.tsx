import React, { useContext, useState, useEffect } from "react";
import useStyles from "./TrainerReservation.styles";
import {
  Card,
  Avatar,
  CardContent,
  ListItem,
  ListItemIcon,
  ListItemText,
  CardActions,
  Button
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { TrainersPanelContext } from "../../trainers/components/TrainersPanel";
import CommentsModal from "../../comments/components/CommentsModal";
import DatePicker from "react-datepicker";
import { parseISO } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { FormGroup, Input } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { Store, UserData } from "../../auth/duck/auth.interfaces";
import { addReservationActionCreator } from "../duck/reservations.operations";
import { Reservation, ReservationResponse } from "../duck/reservations.interfaces";
import AlertMessage from "../../../utils/AlertMessage";
import LoadingContainer from "../../../utils/LoadingContainer";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DateRangeIcon from "@material-ui/icons/DateRange";
import axios from "axios";
import { unwrapResponseData } from "../../../utils/unwrapResponseData";
import PanelTemplate from "../../../templates/PanelTemplate";
import FormAddComment from "../../comments/components/FormAddComment";
import { useHistory } from "react-router";
import { routes } from "../../../routes";
import { roundedDate } from "../../../utils/roundedDate";

interface TrainerReservationProps {}

const TrainerReservation: React.FC<TrainerReservationProps> = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  // const { selectedTrainer } = useContext<TrainersPanelContext>(TrainersPanelContext);
  const { firstName, lastName, _id } = useSelector((state: Store) => state.user.currentUser!);
  const { isFetching, error } = useSelector((state: Store) => state.reservations);
  const [openComments, setOpenComments] = useState<boolean>(false);
  const [selectDate, setSelectDate] = useState<Date | null>(null);
  const [selectTrainingType, setSelectTrainingType] = useState<string>("");
  const [excludeTimesCollection, setExcludeTimesCollection] = useState<Date[]>([]);
  const [dayBasedExcludeCollection, setDayBasedExcludeCollection] = useState<Date[]>([]);
  const [selectedTrainer, setSelectedTrainer] = useState<UserData>();
  const defaultReserveData = {
    firstName,
    lastName,
    selectTrainingType: "",
    reserveDate: new Date(),
    firstNameTrainer: "",
    // firstNameTrainer: selectedTrainer!.firstName,
    lastNameTrainer: "",
    // lastNameTrainer: selectedTrainer!.lastName,
    trainerPhone: 0
    // trainerPhone: selectedTrainer!.data.phone
  };

  const [reserveData, setReserveData] = useState<Reservation>(defaultReserveData);

  useEffect(() => {
    const trainerId = sessionStorage.getItem("trainerId")!;
    const fetchSelectedTrainer = async () => {
      console.log(trainerId, "-trainerID");

      const res = await axios.get<UserData>(`http://localhost:5000/user/${trainerId}`).then(unwrapResponseData);
      setSelectedTrainer(res);
    };
    fetchSelectedTrainer();
    fetchExcludeTimes();
  }, []);

  const handleClickOpenComments = () => {
    setOpenComments(true);
  };

  const handleClickCloseComments = () => {
    setOpenComments(false);
  };

  const handleChangeSelectInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setSelectTrainingType(value);
    setReserveData({
      ...reserveData,
      firstNameTrainer: selectedTrainer!.firstName,
      lastNameTrainer: selectedTrainer!.lastName,
      trainerPhone: selectedTrainer!.data.phone,
      [name]: value
    });
  };

  const handleDatePicker = (date: Date | null, name: string) => {
    if (date) {
      const excludeCollection = [...excludeTimesCollection];
      let filtered = excludeCollection.filter(e => e.getDate() === date.getDate());
      setDayBasedExcludeCollection(filtered);
      setSelectDate(date);
      setReserveData({
        ...reserveData,
        [name]: date
      });
    }
  };

  const handleAddReservation = () => {
    if (selectedTrainer) {
      const trainerId = selectedTrainer._id;
      const userId = _id;
      dispatch(addReservationActionCreator(trainerId, userId, reserveData));
    }
  };

  const fetchExcludeTimes = async () => {
    if (selectedTrainer) {
      const id = selectedTrainer._id;
      const res = await axios
        .get<ReservationResponse[]>(`http://localhost:5000/api/reservations/${id}`)
        .then(unwrapResponseData);
      const excludeTimes = res.map(x => {
        let date = x.reserveDate.toString();
        return parseISO(date);
      });
      setExcludeTimesCollection(excludeTimes);
    }
  };

  return (
    <PanelTemplate>
      <LoadingContainer isFetching={isFetching}>
        <div className={classes.container}>
          {selectedTrainer !== undefined && (
            <>
              <Card className={classes.card}>
                <CardContent className={classes.cardContentWrap}>
                  <div>
                    {selectedTrainer.data ? (
                      <img src={selectedTrainer.data.avatar} className={classes.avatarReservation} alt="avatar" />
                    ) : (
                      <Avatar>{<AccountCircleIcon />}</Avatar>
                    )}
                  </div>

                  <div className={classes.containerTrainerData}>
                    <span
                      className={classes.listItem}
                    >{`${selectedTrainer.firstName} ${selectedTrainer.lastName}`}</span>

                    <ListItem className={classes.listItem}>
                      <ListItemIcon className={classes.listItemIcon}>{<DateRangeIcon />}</ListItemIcon>
                      <ListItemText primary={selectedTrainer.data.age ? selectedTrainer.data.age : "-"} />
                    </ListItem>

                    <ListItem className={classes.listItem}>
                      <ListItemIcon className={classes.listItemIcon}>{<LocationOnIcon />}</ListItemIcon>
                      <ListItemText primary={selectedTrainer.data.city ? selectedTrainer.data.city : "-"} />
                    </ListItem>

                    <ListItem className={classes.listItem}>
                      <ListItemIcon className={classes.listItemIcon}>{<PhoneIcon />}</ListItemIcon>
                      <ListItemText primary={selectedTrainer.data.phone ? selectedTrainer.data.phone : "-"} />
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <ListItemIcon className={classes.listItemIcon}>{<EmailIcon />}</ListItemIcon>
                      <ListItemText primary={selectedTrainer.email} />
                    </ListItem>
                  </div>
                  <div>
                    <ul className={classes.offerList}>
                      {selectedTrainer.offers.map(offer => (
                        <li key={offer._id} className={classes.offerListItem}>
                          {offer.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardActions>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.btnBack}
                    startIcon={<ArrowBackIcon />}
                    onClick={() => history.push(routes.main)}
                  >
                    Back
                  </Button>
                  <Button
                    onClick={() => handleClickOpenComments()}
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.btnBack}
                    startIcon={<OpenInNewIcon />}
                  >
                    Show comments
                  </Button>

                  <DatePicker
                    className={classes.datePickerInput}
                    selected={selectDate}
                    onChange={date => handleDatePicker(date, "reserveDate")}
                    showTimeSelect
                    timeIntervals={60}
                    placeholderText="Select training date"
                    minDate={new Date()}
                    excludeTimes={dayBasedExcludeCollection}
                    onInputClick={() => fetchExcludeTimes()}
                    dateFormat="MMMM d, yyyy h:mm aa"
                  />

                  <FormGroup>
                    <Input
                      type="select"
                      name="selectTrainingType"
                      className={classes.selectTypeTraining}
                      onChange={e => handleChangeSelectInput(e)}
                    >
                      <option value="">Select training type</option>
                      {selectedTrainer.offers.map(offer => (
                        <option key={offer._id}>{offer.description}</option>
                      ))}
                    </Input>
                  </FormGroup>

                  <Button
                    onClick={() => handleAddReservation()}
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.btnBack}
                    disabled={selectTrainingType === "" || selectDate === null}
                    startIcon={<OpenInNewIcon />}
                  >
                    Reserve
                  </Button>
                </CardActions>
              </Card>
              <CommentsModal
                handleClickCloseComments={handleClickCloseComments}
                openComments={openComments}
                selectedTrainer={selectedTrainer}
              />
              <AlertMessage isFetching={isFetching} errorTxt="Error occured!">
                Reservation added successfully!
              </AlertMessage>
            </>
          )}
          <FormAddComment />
        </div>
      </LoadingContainer>
    </PanelTemplate>
  );
};
export default TrainerReservation;
