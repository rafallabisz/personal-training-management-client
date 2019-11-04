import React, { useState } from "react";
import {
  CardActions,
  Card,
  CardContent,
  TextField,
  Button,
  CardHeader,
  Avatar,
  ListItemIcon,
  ListItemText,
  List,
  ListItem
} from "@material-ui/core";
import useStyles from "./TrainersPanel.styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import TrainerDetails from "./TrainerDetails";
import SearchIcon from "@material-ui/icons/Search";

interface TrainersPanelProps {}

const TrainersPanel: React.FC<TrainersPanelProps> = props => {
  const [isActiveBtnMoreDetails, setBtnMoreDetails] = useState<boolean>(false);
  const classes = useStyles();
  if (isActiveBtnMoreDetails) return <TrainerDetails setBtnMoreDetails={setBtnMoreDetails} />;

  return (
    <>
      <Card className={classes.cardSearch}>
        <CardActions>
          <TextField
            id="filled-search"
            label="Enter city"
            type="search"
            className={classes.textField}
            margin="normal"
          />
          <Button variant="contained" color="primary" size="small" startIcon={<SearchIcon />}>
            Search
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
              onClick={() => setBtnMoreDetails(true)}
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
