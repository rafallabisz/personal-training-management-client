import React, { useState, useEffect } from "react";
import useStyles from "./TrainersPanel.styles";
import TrainerCard from "./TrainerCard";
import axios from "axios";
import { UserData } from "../../../auth/duck/auth.interfaces";
import LoadingContainer from "../../../../utils/LoadingContainer";
import FilterCity from "./FilterCity";
import FilterGender, { GenderValue } from "./FilterGender";
import { ValueType } from "react-select";
import PanelTemplate from "../../../../templates/PanelTemplate";
import { routes } from "../../../../routes";
import { useHistory } from "react-router";

interface TrainersPanelProps {}

export interface TrainersPanelContext {
  trainersList: UserData[];
  selectedTrainer?: UserData;
  trainersListWithFilterCity: UserData[];
  searchValue: string;
  mergeFilters: () => UserData[];
}
export const TrainersPanelContext = React.createContext<TrainersPanelContext>({
  trainersList: [],
  trainersListWithFilterCity: [],
  searchValue: "",
  mergeFilters: () => []
});
////////////////////////
const TrainersPanel: React.FC<TrainersPanelProps> = props => {
  const classes = useStyles();
  const history = useHistory();
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
  const [trainersListWithFilterCity, setTrainersListWithFilterCity] = useState<UserData[]>([]);

  const handleTrainersListWithFilterCity = (filteredList: UserData[]) => {
    setTrainersListWithFilterCity(filteredList);
  };

  const handleSearchValue = (value: string) => {
    setSearchValue(value);
    mergeFilters();
  };

  const [genderValue, setGenderValue] = useState<ValueType<GenderValue>>({
    label: "All",
    value: "all"
  });

  const mergeFilters = () => {
    const selectedGender = (genderValue as GenderValue).value;
    if (!searchValue && selectedGender === "all") return trainersList;
    const trainers = searchValue ? trainersListWithFilterCity : trainersList;
    switch (selectedGender) {
      case "all":
        return trainersListWithFilterCity;
      case "male":
        const selectedMale = trainers.filter(trainer => trainer.gender === selectedGender);
        return selectedMale;
      case "female":
        return trainers.filter(trainer => trainer.gender === selectedGender);
      default:
        return trainersList;
    }
  };

  return (
    <>
      <PanelTemplate>
        <LoadingContainer isFetching={isFetching}>
          <TrainersPanelContext.Provider
            value={{
              trainersList,
              selectedTrainer,
              trainersListWithFilterCity,
              searchValue,
              mergeFilters
            }}
          >
            <div className={classes.container}>
              <div style={{ display: "flex", marginBottom: "30px" }}>
                <FilterCity
                  handleTrainersListWithFilterCity={handleTrainersListWithFilterCity}
                  handleSearchValue={handleSearchValue}
                />
                <FilterGender valueGender={genderValue} setGenderValue={setGenderValue} />
              </div>
              <div className={classes.containerCardTrainers} onClick={() => history.push(routes.detailsTrainer)}>
                <TrainerCard setSelectedTrainer={setSelectedTrainer} />
              </div>
            </div>
          </TrainersPanelContext.Provider>
        </LoadingContainer>
      </PanelTemplate>
    </>
  );
};
export default TrainersPanel;
