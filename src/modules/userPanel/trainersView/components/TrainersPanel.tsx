import React, { useState, useEffect } from "react";
import useStyles from "./TrainersPanel.styles";
import TrainerCard from "./TrainerCard";
import axios from "axios";
import { UserData } from "../../../auth/duck/auth.interfaces";
import LoadingContainer from "../../../../utils/LoadingContainer";
import TrainerCardDetails from "./TrainerCardDetails";
import FormAddComment from "../../comments/components/FormAddComment";
import FilterCity from "./FilterCity";
import FilterGender, { SelectGender } from "./FilterGender";
import { ValueType, ActionMeta } from "react-select";

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
  const [trainersListWithFilterCity, setTrainersListWithFilterCity] = useState<UserData[]>([]);

  const handleTrainersListWithFilterCity = (filteredList: UserData[]) => {
    setTrainersListWithFilterCity(filteredList);
  };

  const handleSearchValue = (value: string) => {
    setSearchValue(value);
    mergeFilters();
  };

  ////////////select gender
  const [valueGender, setValueGender] = useState<ValueType<SelectGender>>({
    label: "All",
    value: "all"
  });
  const handleSelectGender = (e: ValueType<SelectGender>, actionMeta: ActionMeta) => {
    const value = (e as SelectGender).value;
    const label = (e as SelectGender).label;
    setValueGender({
      label,
      value
    });
    mergeFilters();
  };

  const mergeFilters = () => {
    const selectedGender = (valueGender as SelectGender).value;

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
            {isActiveBtnMoreDetails ? (
              <>
                <TrainerCardDetails setBtnMoreDetails={setBtnMoreDetails} />
                <FormAddComment />
              </>
            ) : (
              <>
                <div style={{ display: "flex", marginBottom: "30px" }}>
                  <FilterCity
                    handleTrainersListWithFilterCity={handleTrainersListWithFilterCity}
                    handleSearchValue={handleSearchValue}
                  />
                  <FilterGender handleSelectGender={handleSelectGender} valueGender={valueGender} />
                </div>
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
