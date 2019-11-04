import React from "react";
import {
  CardActions,
  Card,
  CardContent,
  TextField,
  Button,
  CardHeader,
  Avatar,
  Typography,
  Grid,
  ListItemIcon,
  ListItemText,
  List,
  ListItem
} from "@material-ui/core";
import useStyles from "./TrainersPanel.styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import SaveIcon from "@material-ui/icons/Save";
import MoreVertIcon from "@material-ui/icons/MoreVert";

interface TrainersPanelProps {}

const TrainersPanel: React.FC<TrainersPanelProps> = props => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.cardSearch}>
        <CardActions>
          <TextField
            id="filled-search"
            label="Search trainer"
            type="search"
            className={classes.textField}
            margin="normal"
          />
          <Button variant="contained" color="primary" size="small" startIcon={<AddCircleIcon />}>
            Add
          </Button>
        </CardActions>
      </Card>

      <div className={classes.container}>
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
            >
              More details
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};
export default TrainersPanel;
