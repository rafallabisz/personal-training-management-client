import React from "react";
import {
  Card,
  CardContent,
  ListItemText,
  List,
  ListItem,
  CardActions,
  Button,
  Fab,
  TextField
} from "@material-ui/core";
import useStyles from "./TrainingPanel.styles";
import AddIcon from "@material-ui/icons/Add";
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
            // variant="filled"
          />
          <Fab size="small" color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </CardActions>
      </div>
      <List>
        <ListItem>
          <ListItemText primary="Trening personalny 1 na 1" />
          <DeleteForeverIcon />
        </ListItem>
        <ListItem>
          <ListItemText primary="Plan treningowy " />
        </ListItem>
        <ListItem>
          <ListItemText primary="Plan dietetyczny" />
        </ListItem>
      </List>
      <CardActions>
        <Button variant="contained" color="primary" size="small" className={classes.btnSave} startIcon={<SaveIcon />}>
          Save
        </Button>
      </CardActions>
    </Card>
  );
};
export default TrainingPanel;
