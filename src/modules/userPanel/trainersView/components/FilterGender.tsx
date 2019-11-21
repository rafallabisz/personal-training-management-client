import React, { useState } from "react";
import Select, { ValueType, ActionMeta } from "react-select";

const options = [
  { value: "all", label: "All" },
  { value: "male", label: "Male" },
  { value: "female", label: "Female" }
];

export interface SelectGender {
  label: string;
  value: string;
}

interface FilterGenderProps {
  handleSelectGender: (e: ValueType<SelectGender>, actionMeta: ActionMeta) => void;
  valueGender: ValueType<SelectGender>;
}

const FilterGender: React.FC<FilterGenderProps> = ({ handleSelectGender, valueGender }) => {
  // const [valueGender, setValueGender] = useState<ValueType<SelectGender>>({
  //   label: "All",
  //   value: "all"
  // });
  // const handleSelectGender = (e: ValueType<SelectGender>, actionMeta: ActionMeta) => {
  //   const value = (e as SelectGender).value;
  //   const label = (e as SelectGender).label;
  //   setValueGender({
  //     label,
  //     value
  //   });
  // };

  return (
    <Select
      isSearchable={false}
      options={options}
      styles={customStyles}
      defaultValue={options[0]}
      onChange={handleSelectGender}
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
