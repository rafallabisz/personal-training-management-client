import React from "react";
import {
  Card,
  CardContent,
  ListItemText,
  List,
  ListItem,
  CardActions,
  Button,
  TextField,
  Tooltip
} from "@material-ui/core";
import useStyles from "./TrainingPanel.styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import SaveIcon from "@material-ui/icons/Save";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

interface TrainingPanelProps {}

const TrainingPanel: React.FC<TrainingPanelProps> = props => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <div className={classes.wrapper}>
        <CardContent className={classes.title}>Offer:</CardContent>
        <CardActions>
          <TextField
            id="filled-search"
            label="Add training type"
            type="search"
            className={classes.textField}
            margin="normal"
          />
          <Button variant="contained" color="primary" size="small" startIcon={<AddCircleIcon />}>
            Add
          </Button>
        </CardActions>
      </div>
      <CardContent>
        <List>
          <ListItem>
            <ListItemText primary="Trening personalny 1 na 1" className={classes.listItem} />
            <Tooltip title="Delete">
              <DeleteForeverIcon className={classes.iconExit} />
            </Tooltip>
          </ListItem>
          <ListItem>
            <ListItemText primary="Plan treningowy " />
          </ListItem>
          <ListItem>
            <ListItemText primary="Plan dietetyczny" />
          </ListItem>
        </List>
      </CardContent>

      <CardActions>
        <Button variant="contained" color="primary" size="small" className={classes.btnSave} startIcon={<SaveIcon />}>
          Save
        </Button>
      </CardActions>
    </Card>
  );
};
export default TrainingPanel;
