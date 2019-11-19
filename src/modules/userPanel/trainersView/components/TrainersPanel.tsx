import React, { useState, useEffect } from "react";
import useStyles from "./TrainersPanel.styles";
import TrainerCard from "./TrainerCard";
import axios from "axios";
import { UserData } from "../../../auth/duck/auth.interfaces";
import LoadingContainer from "../../../../utils/LoadingContainer";
import TrainerCardDetails from "./TrainerCardDetails";
import FormAddComment from "../../comments/components/FormAddComment";
import FilterCity from "./FilterCity";

interface TrainersPanelProps {}

export interface TrainersPanelContext {
  trainersList: UserData[];
  selectedTrainer?: UserData;
  trainersListVisible: UserData[];
  searchValue: string;
}
export const TrainersPanelContext = React.createContext<TrainersPanelContext>({
  trainersList: [],
  trainersListVisible: [],
  searchValue: ""
});
////////////////////////
const TrainersPanel: React.FC<TrainersPanelProps> = props => {
  const [isActiveBtnMoreDetails, setBtnMoreDetails] = useState<boolean>(false);
  const classes = useStyles();
  useEffect(() => {
    const fetchTrainers = async () => {
      setIsFetching(true);
      const response = await axios.get<UserData[]>("http://localhost:5000/user/trainers");
      setTrainersList(response.data);
      setIsFetching(false);
    };
    fetchTrainers();
  }, []);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [trainersList, setTrainersList] = useState<UserData[]>([]);
  const [selectedTrainer, setSelectedTrainer] = useState<UserData>();

  const [searchValue, setSearchValue] = useState<string>("");
  const [trainersListVisible, setTrainersListVisible] = useState<UserData[]>([]);

  const handleTrainersListVisible = (updatedList: UserData[]) => {
    setTrainersListVisible(updatedList);
  };

  const handleSearchValue = (value: string) => {
    setSearchValue(value);
  };
  return (
    <>
      <LoadingContainer isFetching={isFetching}>
        <TrainersPanelContext.Provider
          value={{
            trainersList,
            selectedTrainer,
            trainersListVisible,
            searchValue
          }}
        >
          <div className={classes.container}>
            {isActiveBtnMoreDetails ? (
              <>
                <TrainerCardDetails setBtnMoreDetails={setBtnMoreDetails} />
                <FormAddComment />
              </>
            ) : (
              <>
                <FilterCity
                  handleTrainersListVisible={handleTrainersListVisible}
                  handleSearchValue={handleSearchValue}
                />

                <div className={classes.containerCardTrainers}>
                  <TrainerCard setBtnMoreDetails={setBtnMoreDetails} setSelectedTrainer={setSelectedTrainer} />
                </div>
              </>
            )}
          </div>
        </TrainersPanelContext.Provider>
      </LoadingContainer>
    </>
  );
};
export default TrainersPanel;
