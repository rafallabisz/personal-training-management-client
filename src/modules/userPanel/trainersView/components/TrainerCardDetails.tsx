import React, { useContext } from "react";
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
import { OfferDescriptionResponse } from "../../../auth/duck/auth.interfaces";
import { TrainersPanelContext } from "./TrainersPanel";

interface TrainerCardDetailsProps {
  setBtnMoreDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

const TrainerCardDetails: React.FC<TrainerCardDetailsProps> = ({ setBtnMoreDetails }) => {
  const classes = useStyles();
  const { selectedTrainer } = useContext<TrainersPanelContext>(TrainersPanelContext);

  const trainer = selectedTrainer!;
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar>{<AccountCircleIcon />}</Avatar>}
        // action={}
        title={`${trainer.firstName} ${trainer.lastName}, ${trainer.data ? trainer.data.age : "-"}`}
        subheader={trainer.data ? trainer.data.city : "-"}
        className={classes.cardHeader}
      />

      <div className={classes.wrapDataTrainer}>
        <CardContent className={classes.cardContent}>
          <List className={classes.list}>
            <ListItem>
              <ListItemIcon className={classes.listItemIcon}>{<PhoneIcon />}</ListItemIcon>
              <ListItemText primary={trainer.data ? trainer.data.phone : "-"} />
            </ListItem>

            <ListItem>
              <ListItemIcon className={classes.listItemIcon}>{<EmailIcon />}</ListItemIcon>
              <ListItemText primary={trainer.email} />
            </ListItem>
          </List>
        </CardContent>

        <CardContent className={classes.cardContent}>
          <List className={classes.list}>
            {trainer.offers ? (
              trainer.offers.map((offer: OfferDescriptionResponse) => (
                <ListItem key={offer._id}>
                  <ListItemText primary={offer.description} />
                </ListItem>
              ))
            ) : (
              <ListItem>
                <ListItemText primary="Brak oferty" />
              </ListItem>
            )}
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
          variant="contained"
          color="primary"
          size="small"
          className={classes.btnBack}
          startIcon={<OpenInNewIcon />}
        >
          Show comments
        </Button>
      </CardActions>
    </Card>
  );
};
export default TrainerCardDetails;
