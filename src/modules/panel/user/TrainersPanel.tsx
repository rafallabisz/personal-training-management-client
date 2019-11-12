import React, { useState, useEffect } from "react";
import { CardActions, Card, TextField, Button } from "@material-ui/core";
import useStyles from "./TrainersPanel.styles";
import TrainerDetails from "./TrainerDetails";
import SearchIcon from "@material-ui/icons/Search";
import TrainerCard from "./TrainerCard";
import axios from "axios";
import { UserData } from "../../auth/duck/auth.interfaces";

interface TrainersPanelProps {}

export interface TrainersPanelContext {
  trainersList: UserData[];
}
export const TrainersPanelContext = React.createContext<TrainersPanelContext>({
  trainersList: []
});

const TrainersPanel: React.FC<TrainersPanelProps> = props => {
  const [isActiveBtnMoreDetails, setBtnMoreDetails] = useState<boolean>(false);
  const classes = useStyles();

  useEffect(() => {
    const fetchTrainers = async () => {
      const response = await axios.get<UserData[]>(
        "http://localhost:5000/user/trainers"
      );
      setTrainersList(response.data);
    };
    fetchTrainers();
  }, []);

  const [trainersList, setTrainersList] = useState<UserData[]>([]);
  const [selectedTrainer, setSelectedTrainer] = useState<UserData>();
  console.log(trainersList, "trainersList");

  return (
    <>
      <TrainersPanelContext.Provider
        value={{
          trainersList
        }}
      >
        {isActiveBtnMoreDetails ? (
          <TrainerDetails
            setBtnMoreDetails={setBtnMoreDetails}
            selectedTrainer={selectedTrainer}
          />
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
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  startIcon={<SearchIcon />}
                >
                  Search
                </Button>
              </CardActions>
            </Card>

            <div className={classes.containerCardTrainers}>
              <TrainerCard
                setBtnMoreDetails={setBtnMoreDetails}
                setSelectedTrainer={setSelectedTrainer}
              />
            </div>
          </div>
        )}
      </TrainersPanelContext.Provider>
    </>
  );
};
export default TrainersPanel;
