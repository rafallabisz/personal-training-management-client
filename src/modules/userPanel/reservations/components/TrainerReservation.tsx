import React, { useContext, useState } from "react";
import useStyles from "./TrainerReservation.styles";
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  List,
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
import { TrainersPanelContext } from "../../trainersView/components/TrainersPanel";
import CommentsModal from "../../comments/components/CommentsModal";
import DatePicker from "react-datepicker";
import { setHours, setMinutes } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { FormGroup, Input } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { Store } from "../../../auth/duck/auth.interfaces";
import { addReservationActionCreator } from "../duck/reservations.operations";
import { Reservation } from "../duck/reservations.interfaces";
import AlertMessage from "../../../../utils/AlertMessage";
import LoadingContainer from "../../../../utils/LoadingContainer";

interface TrainerReservationProps {
  setBtnMoreDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

const TrainerReservation: React.FC<TrainerReservationProps> = ({ setBtnMoreDetails }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { selectedTrainer } = useContext<TrainersPanelContext>(TrainersPanelContext);
  const { firstName, lastName, _id } = useSelector((state: Store) => state.user.currentUser!);
  const { isFetching, error } = useSelector((state: Store) => state.reservations);
  const [openComments, setOpenComments] = useState<boolean>(false);
  const [selectDate, setSelectDate] = useState<Date | null>(null);
  const [selectTrainingType, setSelectTrainingType] = useState<string>("");

  const defaultReserveData = {
    firstName,
    lastName,
    selectTrainingType: "",
    reserveDate: new Date()
  };

  const [reserveData, setReserveData] = useState<Reservation>(defaultReserveData);

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
      [name]: value
    });
  };

  const handleDatePicker = (date: Date | null, name: string) => {
    if (date) {
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

  return (
    <LoadingContainer isFetching={isFetching}>
      {selectedTrainer !== undefined && (
        <>
          <Card className={classes.card}>
            <CardHeader
              avatar={<Avatar>{<AccountCircleIcon />}</Avatar>}
              // action={}
              title={`${selectedTrainer.firstName} ${selectedTrainer.lastName}, ${
                selectedTrainer.data ? selectedTrainer.data.age : "-"
              }`}
              subheader={selectedTrainer.data ? selectedTrainer.data.city : "-"}
              className={classes.cardHeader}
            />

            <div className={classes.wrapDataTrainer}>
              <CardContent className={classes.cardContent}>
                <List className={classes.list}>
                  <ListItem>
                    <ListItemIcon className={classes.listItemIcon}>{<PhoneIcon />}</ListItemIcon>
                    <ListItemText primary={selectedTrainer.data ? selectedTrainer.data.phone : "-"} />
                  </ListItem>

                  <ListItem>
                    <ListItemIcon className={classes.listItemIcon}>{<EmailIcon />}</ListItemIcon>
                    <ListItemText primary={selectedTrainer.email} />
                  </ListItem>
                </List>
              </CardContent>

              <CardContent className={classes.cardContent}>
                <List className={classes.list}>
                  {selectedTrainer.offers.map(offer => (
                    <ListItem key={offer._id}>
                      <ListItemText primary={offer.description} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </div>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.btnBack}
                startIcon={<ArrowBackIcon />}
                onClick={() => setBtnMoreDetails(false)}
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
                // excludeTimes={[
                //   // setHours(setMinutes(new Date(), 0), 17),
                //   // setHours(setMinutes(new Date(), 30), 18),
                //   // setHours(setMinutes(new Date(), 30), 19),
                //   // setHours(setMinutes(new Date(), 30), 17)
                // ]}
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
          <CommentsModal handleClickCloseComments={handleClickCloseComments} openComments={openComments} />
          <AlertMessage isFetching={isFetching} errorTxt="Error occured!">
            Reservation added successfully!
          </AlertMessage>
        </>
      )}
    </LoadingContainer>
  );
};
export default TrainerReservation;
