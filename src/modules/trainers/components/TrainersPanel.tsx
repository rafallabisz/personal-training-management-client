import React, { useState, useEffect } from "react";
import useStyles from "./TrainersPanel.styles";
import TrainerCard from "./TrainerCard";
import { UserData } from "../../auth/duck/auth.interfaces";
import LoadingContainer from "../../../utils/LoadingContainer";
import FilterCity from "./FilterCity";
import FilterGender, { GenderValue } from "./FilterGender";
import { ValueType } from "react-select";
import PanelTemplate from "../../../templates/PanelTemplate";
import { routes } from "../../../routes";
import { useHistory } from "react-router";
import api from "../../../services";

interface TrainersPanelProps {}

export interface TrainersPanelContext {
  mergeFilters: () => UserData[];
}
export const TrainersPanelContext = React.createContext<TrainersPanelContext>({
  mergeFilters: () => []
});
////////////////////////
const TrainersPanel: React.FC<TrainersPanelProps> = props => {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    const fetchTrainers = async () => {
      const trainersList = await api.fetchAllTrainers(setIsFetching);
      setTrainersList(trainersList);
    };
    fetchTrainers();
  }, []);

  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [trainersList, setTrainersList] = useState<UserData[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [trainersListWithFilterCity, setTrainersListWithFilterCity] = useState<UserData[]>([]);
  const [genderValue, setGenderValue] = useState<ValueType<GenderValue>>({
    label: "All",
    value: "all"
  });

  const handleTrainersListWithFilterCity = (filteredList: UserData[]) => {
    setTrainersListWithFilterCity(filteredList);
  };

  const handleSearchValue = (value: string) => {
    setSearchValue(value);
    mergeFilters();
  };

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

  const goToReservation = () => {
    history.push(routes.reservation);
  };

  return (
    <PanelTemplate>
      <LoadingContainer isFetching={isFetching}>
        <TrainersPanelContext.Provider
          value={{
            mergeFilters
          }}
        >
          <div className={classes.container}>
            <div className={classes.wrapOnFilterNav}>
              <FilterCity
                handleTrainersListWithFilterCity={handleTrainersListWithFilterCity}
                handleSearchValue={handleSearchValue}
                trainersList={trainersList}
                searchValue={searchValue}
              />
              <FilterGender valueGender={genderValue} setGenderValue={setGenderValue} />
            </div>
            <div className={classes.containerCardTrainers} onClick={() => goToReservation()}>
              <TrainerCard />
            </div>
          </div>
        </TrainersPanelContext.Provider>
      </LoadingContainer>
    </PanelTemplate>
  );
};
export default TrainersPanel;
