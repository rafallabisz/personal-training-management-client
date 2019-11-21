import React, { useContext } from "react";
import Select, { ValueType, ActionMeta } from "react-select";
import { TrainersPanelContext } from "./TrainersPanel";

const options = [
  { value: "all", label: "All" },
  { value: "male", label: "Male" },
  { value: "female", label: "Female" }
];

export interface GenderValue {
  label: string;
  value: string;
}

interface FilterGenderProps {
  valueGender: ValueType<GenderValue>;
  setGenderValue: React.Dispatch<React.SetStateAction<ValueType<GenderValue>>>;
}

const FilterGender: React.FC<FilterGenderProps> = ({ setGenderValue, valueGender }) => {
  const { mergeFilters } = useContext<TrainersPanelContext>(TrainersPanelContext);
  const handleGenderValue = (e: ValueType<GenderValue>, actionMeta: ActionMeta) => {
    const value = (e as GenderValue).value;
    const label = (e as GenderValue).label;
    setGenderValue({
      label,
      value
    });
    mergeFilters();
  };

  return (
    <Select
      isSearchable={false}
      options={options}
      styles={customStyles}
      defaultValue={options[0]}
      onChange={handleGenderValue}
      value={valueGender}
    />
  );
};
export default FilterGender;

const customStyles = {
  control: (styles: any) => ({
    ...styles,
    width: 120,
    minHeight: 30,
    height: 30,
    alignContent: "center"
  })
};
