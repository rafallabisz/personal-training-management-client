import React, { useState, useContext, FormEvent } from "react";
import Autosuggest, { SuggestionsFetchRequestedParams } from "react-autosuggest";
import * as theme from "./themeAutosuggest.module.css";
import { UserData } from "../../auth/duck/auth.interfaces";
import { TrainersPanelContext } from "./TrainersPanel";

interface FilterCityProps {
  handleTrainersListWithFilterCity: (filteredList: UserData[]) => void;
  handleSearchValue: (value: string) => void;
}

const FilterCity: React.FC<FilterCityProps> = ({ handleTrainersListWithFilterCity, handleSearchValue }) => {
  const { trainersList, searchValue } = useContext<TrainersPanelContext>(TrainersPanelContext);

  const trainersListWithFieldCity = trainersList.filter(
    x => x.data !== undefined && x.data.city !== undefined && x.data.city !== ""
  );

  const [suggestions, setSuggestions] = useState<UserData[]>([]);

  const getSuggestions = (value: string) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    const findMatchCity = trainersListWithFieldCity.filter(
      trainer => trainer.data.city.toLowerCase().slice(0, inputLength) === inputValue
    );
    const seen = new Set();
    const filteredArrWithoutDuplicates = findMatchCity.filter(el => {
      const duplicate = seen.has(el.data.city);
      seen.add(el.data.city);
      return !duplicate;
    });

    return inputLength === 0 ? [] : filteredArrWithoutDuplicates;
  };
  const getSuggestionValue = (suggestion: UserData) => suggestion.data.city;

  const renderSuggestion = (suggestion: UserData) => <div>{suggestion.data.city}</div>;

  const onChange = (event: FormEvent<any>, { newValue, method }: Autosuggest.ChangeEvent) => {
    handleSearchValue(newValue);
    filterList(newValue);
  };
  const onSuggestionsFetchRequested = (suggestionsParams: SuggestionsFetchRequestedParams) => {
    setSuggestions(getSuggestions(suggestionsParams.value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: "Find city",
    value: searchValue,
    onChange
  };

  const filterList = (newValue: string) => {
    const updatedList = trainersListWithFieldCity.filter(trainer => {
      return trainer.data.city.toLowerCase().includes(newValue.toLowerCase());
    });
    handleTrainersListWithFilterCity(updatedList);
  };

  return (
    <div>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={suggestionsParams => onSuggestionsFetchRequested(suggestionsParams)}
        onSuggestionsClearRequested={() => onSuggestionsClearRequested()}
        getSuggestionValue={suggestion => getSuggestionValue(suggestion)}
        renderSuggestion={suggestion => renderSuggestion(suggestion)}
        inputProps={inputProps}
        theme={theme}
      />
    </div>
  );
};
export default FilterCity;
