import React, { useState } from "react";
import { CardActions, Card, TextField, Button } from "@material-ui/core";
import useStyles from "./TrainersPanel.styles";
import TrainerDetails from "./TrainerDetails";
import SearchIcon from "@material-ui/icons/Search";
import TrainerCard from "./TrainerCard";

interface TrainersPanelProps {}

const TrainersPanel: React.FC<TrainersPanelProps> = props => {
  const [isActiveBtnMoreDetails, setBtnMoreDetails] = useState<boolean>(false);
  const classes = useStyles();

  return (
    <>
      {isActiveBtnMoreDetails ? (
        <TrainerDetails setBtnMoreDetails={setBtnMoreDetails} />
      ) : (
        <div className={classes.container}>
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

          <div className={classes.containerCardTrainers}>
            <TrainerCard setBtnMoreDetails={setBtnMoreDetails} />
          </div>
        </div>
      )}
    </>
  );
};
export default TrainersPanel;
