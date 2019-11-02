import React from "react";
import { Tabs, Tab } from "@material-ui/core";

interface TopMenuProps {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const TopMenu: React.FC<TopMenuProps> = ({ value, setValue }) => {
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
      <Tab label="Training" {...a11yProps(0)} />
      <Tab label="Comments" {...a11yProps(1)} />
      <Tab label="Settings" {...a11yProps(2)} />
    </Tabs>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
};

export default TopMenu;
