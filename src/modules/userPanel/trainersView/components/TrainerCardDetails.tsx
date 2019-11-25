import React, { useContext, useState } from "react";
import useStyles from "./TrainerCardDetails.styles";
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
import { TrainersPanelContext } from "./TrainersPanel";
import CommentsModal from "./CommentsModal";
import DatePicker from "react-datepicker";
import { setHours, setMinutes } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { FormGroup, Input } from "reactstrap";
import { ReserveData } from "./userPanelTypes";
import { useSelector } from "react-redux";
import { Store } from "../../../auth/duck/auth.interfaces";
import { roundedDate, roundedDateForward } from "../../../../utils/roundedDate";

interface TrainerCardDetailsProps {
  setBtnMoreDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

const TrainerCardDetails: React.FC<TrainerCardDetailsProps> = ({ setBtnMoreDetails }) => {
  const classes = useStyles();
  const { selectedTrainer } = useContext<TrainersPanelContext>(TrainersPanelContext);
  const { firstName, lastName } = useSelector((state: Store) => state.user.currentUser!);
  const [openComments, setOpenComments] = useState<boolean>(false);
  const [selectDate, setSelectDate] = useState<Date | null>(roundedDateForward(60));
  const [selectTypeTraining, setSelectTypeTraining] = useState<string>("");

  const defaultReserveData = {
    firstName,
    lastName,
    selectTrainingType: "",
    reserveDate: roundedDateForward(60)
  };

  const [reserveData, setReserveData] = useState<ReserveData>(defaultReserveData);

  const handleClickOpenComments = () => {
    setOpenComments(true);
  };

  const handleClickCloseComments = () => {
    setOpenComments(false);
  };

  const handleChangeSelectInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setSelectTypeTraining(value);
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

  console.log(reserveData, "=--reserveData");

  return (
    <>
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
                  <option value="">Select type training</option>
                  {selectedTrainer.offers.map(offer => (
                    <option key={offer._id}>{offer.description}</option>
                  ))}
                </Input>
              </FormGroup>

              <Button
                // onClick={() => handleClickOpenComments()}
                variant="contained"
                color="primary"
                size="small"
                className={classes.btnBack}
                disabled={selectTypeTraining === ""}
                startIcon={<OpenInNewIcon />}
              >
                Reserve
              </Button>
            </CardActions>
          </Card>
          <CommentsModal handleClickCloseComments={handleClickCloseComments} openComments={openComments} />
        </>
      )}
    </>
  );
};
export default TrainerCardDetails;
