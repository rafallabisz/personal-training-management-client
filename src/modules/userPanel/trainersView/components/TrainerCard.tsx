import React, { useContext } from "react";
import useStyles from "./TrainerCard.styles";
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
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { TrainersPanelContext } from "./TrainersPanel";
import { UserData } from "../../../auth/duck/auth.interfaces";

interface TrainerCardProps {
  setBtnMoreDetails: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedTrainer: React.Dispatch<
    React.SetStateAction<UserData | undefined>
  >;
}

const TrainerCard: React.FC<TrainerCardProps> = ({
  setBtnMoreDetails,
  setSelectedTrainer
}) => {
  const trainersPanel = useContext<TrainersPanelContext>(TrainersPanelContext);

  const classes = useStyles();

  return (
    <>
      {trainersPanel.trainersList.map(trainerData => (
        <Card className={classes.card}>
          <CardHeader
            avatar={<Avatar>{<AccountCircleIcon />}</Avatar>}
            // action={}
            title={`${trainerData.firstName} ${trainerData.lastName}, ${
              trainerData.data ? trainerData.data.age : "-"
            }`}
            subheader={trainerData.data ? trainerData.data.city : "-"}
            className={classes.cardHeader}
          />
          <CardContent className={classes.cardContent}>
            <List className={classes.list}>
              <ListItem>
                <ListItemIcon className={classes.listItemIcon}>
                  {<PhoneIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={trainerData.data ? trainerData.data.phone : "-"}
                />
              </ListItem>

              <ListItem>
                <ListItemIcon className={classes.listItemIcon}>
                  {<EmailIcon />}
                </ListItemIcon>
                <ListItemText primary={trainerData.email} />
              </ListItem>
            </List>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.btnMoreDetails}
              startIcon={<MoreVertIcon />}
              onClick={() => {
                setBtnMoreDetails(true);
                setSelectedTrainer(trainerData);
              }}
            >
              More details
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};
export default TrainerCard;
