import React from "react";
import { Card, CardContent, ListItemText, List, ListItem, CardActions, Button, Fab } from "@material-ui/core";
import useStyles from "./TrainingPanel.styles";
import AddIcon from "@material-ui/icons/Add";

interface TrainingPanelProps {}

const TrainingPanel: React.FC<TrainingPanelProps> = props => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <div className={classes.wrapper}>
        <CardContent className={classes.title}>Offer:</CardContent>
        <CardActions>
          <Fab size="small" color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </CardActions>
      </div>
      <List>
        <ListItem>
          <ListItemText primary="Trening personalny 1 na 1" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Plan treningowy" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Plan dietetyczny" />
        </ListItem>
      </List>
    </Card>
  );
};
export default TrainingPanel;
