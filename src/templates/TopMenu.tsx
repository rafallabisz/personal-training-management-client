import React from "react";
import { Tabs, Tab } from "@material-ui/core";

interface TopMenuProps {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  listMenu: string[];
}

const TopMenu: React.FC<TopMenuProps> = ({ value, setValue, listMenu }) => {
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
      {listMenu.map((content, i) => (
        <Tab label={content} {...a11yProps(i)} key={i} />
      ))}
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
