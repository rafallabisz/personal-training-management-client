import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { CardActions, Card, TextField, Button } from "@material-ui/core";
import useStyles from "./TrainersPanel.styles";
import SearchIcon from "@material-ui/icons/Search";
import TrainerCard from "./TrainerCard";
import axios from "axios";
import { UserData } from "../../../auth/duck/auth.interfaces";
import LoadingContainer from "../../../../utils/LoadingContainer";
import TrainerCardDetails from "./TrainerCardDetails";
import FormAddComment from "../../comments/components/FormAddComment";
import Autosuggest, { SuggestionsFetchRequestedParams, InputProps } from "react-autosuggest";

interface TrainersPanelProps {}

export interface TrainersPanelContext {
  trainersList: UserData[];
  selectedTrainer?: UserData;
}
export const TrainersPanelContext = React.createContext<TrainersPanelContext>({
  trainersList: []
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
  const [suggestions, setSuggestions] = useState<UserData[]>([]);

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

  return (
    <>
      <LoadingContainer isFetching={isFetching}>
        <TrainersPanelContext.Provider
          value={{
            trainersList,
            selectedTrainer
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
                <Card className={classes.cardSearch}>
                  <CardActions>
                    <Autosuggest
                      suggestions={suggestions}
                      onSuggestionsFetchRequested={suggestionsParams => onSuggestionsFetchRequested(suggestionsParams)}
                      onSuggestionsClearRequested={() => onSuggestionsClearRequested()}
                      getSuggestionValue={suggestion => getSuggestionValue(suggestion)}
                      renderSuggestion={suggestion => renderSuggestion(suggestion)}
                      inputProps={inputProps}
                    />
                  </CardActions>
                </Card>

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
