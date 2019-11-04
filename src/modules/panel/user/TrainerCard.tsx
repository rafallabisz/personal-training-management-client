import React from "react";
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

interface TrainerCardProps {
  setBtnMoreDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

const TrainerCard: React.FC<TrainerCardProps> = ({ setBtnMoreDetails }) => {
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
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={classes.btnMoreDetails}
          startIcon={<MoreVertIcon />}
          onClick={() => setBtnMoreDetails(true)}
        >
          More details
        </Button>
      </CardActions>
    </Card>
  );
};
export default TrainerCard;
