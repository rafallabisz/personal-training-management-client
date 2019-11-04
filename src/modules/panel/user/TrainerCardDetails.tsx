import React from "react";
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

interface TrainerCardDetailsProps {
  setBtnMoreDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

const TrainerCardDetails: React.FC<TrainerCardDetailsProps> = ({ setBtnMoreDetails }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar>{<AccountCircleIcon />}</Avatar>}
        // action={}
        title="Rafal Labisz, 22"
        subheader="Wroclaw"
        className={classes.cardHeader}
      />

      <div className={classes.wrapDataTrainer}>
        <CardContent className={classes.cardContent}>
          <List className={classes.list}>
            <ListItem>
              <ListItemIcon className={classes.listItemIcon}>{<PhoneIcon />}</ListItemIcon>
              <ListItemText primary={"500500500"} />
            </ListItem>

            <ListItem>
              <ListItemIcon className={classes.listItemIcon}>{<EmailIcon />}</ListItemIcon>
              <ListItemText primary={"rafal@gmail.com"} />
            </ListItem>
          </List>
        </CardContent>

        <CardContent className={classes.cardContent}>
          <List className={classes.list}>
            <ListItem>
              <ListItemText primary={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, aliquid?"} />
            </ListItem>

            <ListItem>
              <ListItemText primary={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, repellendus."} />
            </ListItem>
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
