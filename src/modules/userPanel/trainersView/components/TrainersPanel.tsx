import React, { useState, useEffect, FormEvent } from "react";
import useStyles from "./TrainersPanel.styles";
import SearchIcon from "@material-ui/icons/Search";
import TrainerCard from "./TrainerCard";
import axios from "axios";
import { UserData } from "../../../auth/duck/auth.interfaces";
import LoadingContainer from "../../../../utils/LoadingContainer";
import TrainerCardDetails from "./TrainerCardDetails";
import FormAddComment from "../../comments/components/FormAddComment";
import Autosuggest, { SuggestionsFetchRequestedParams } from "react-autosuggest";
import * as theme from "./themeAutosuggest.module.css";

interface TrainersPanelProps {}

export interface TrainersPanelContext {
  trainersList: UserData[];
  selectedTrainer?: UserData;
  trainersListVisible: UserData[];
}
export const TrainersPanelContext = React.createContext<TrainersPanelContext>({
  trainersList: [],
  trainersListVisible: []
});
////////////////////////
const TrainersPanel: React.FC<TrainersPanelProps> = props => {
  const [isActiveBtnMoreDetails, setBtnMoreDetails] = useState<boolean>(false);
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    const fetchTrainers = async () => {
      setIsFetching(true);
      const response = await axios.get<UserData[]>("http://localhost:5000/user/trainers");
      setTrainersList(response.data);
      setIsFetching(false);
    };
    fetchTrainers();
  }, [searchValue]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [trainersList, setTrainersList] = useState<UserData[]>([]);
  const [selectedTrainer, setSelectedTrainer] = useState<UserData>();
  const [suggestions, setSuggestions] = useState<UserData[]>([]);

  const [trainersListVisible, setTrainersListVisible] = useState<UserData[]>([]);

  const getSuggestions = (value: string) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0
      ? []
      : trainersList.filter(trainer => trainer.firstName.toLowerCase().slice(0, inputLength) === inputValue);
  };
  const getSuggestionValue = (suggestion: UserData) => suggestion.firstName;

  const renderSuggestion = (suggestion: UserData) => <div>{suggestion.firstName}</div>;

  const onChange = (event: FormEvent<any>, { newValue, method }: Autosuggest.ChangeEvent) => {
    setSearchValue(newValue);
    filterList(newValue);
  };
  const onSuggestionsFetchRequested = (suggestionsParams: SuggestionsFetchRequestedParams) => {
    setSuggestions(getSuggestions(suggestionsParams.value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: "name",
    value: searchValue,
    onChange
  };
  console.log(searchValue, "--searchValue");

  //////////////////////
  const filterList = (newValue: string) => {
    // if (!newValue) return;
    const updatedList = trainersList.filter(trainer => {
      return trainer.firstName.toLowerCase().includes(newValue.toLowerCase());
    });
    setTrainersListVisible(updatedList);
  };

  console.log(trainersListVisible, "--visibleList");

  return (
    <>
      <LoadingContainer isFetching={isFetching}>
        <TrainersPanelContext.Provider
          value={{
            trainersList,
            selectedTrainer,
            trainersListVisible
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
                {/* <Card className={classes.cardSearch}>
                  <CardActions> */}
                <Autosuggest
                  suggestions={suggestions}
                  onSuggestionsFetchRequested={suggestionsParams => onSuggestionsFetchRequested(suggestionsParams)}
                  onSuggestionsClearRequested={() => onSuggestionsClearRequested()}
                  getSuggestionValue={suggestion => getSuggestionValue(suggestion)}
                  renderSuggestion={suggestion => renderSuggestion(suggestion)}
                  inputProps={inputProps}
                  theme={theme}
                />
                {/* </CardActions>
                </Card> */}

                <div className={classes.containerCardTrainers}>
                  <TrainerCard
                    setBtnMoreDetails={setBtnMoreDetails}
                    setSelectedTrainer={setSelectedTrainer}
                    searchValue={searchValue}
                  />
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
