import React from "react";
import { Tabs, Tab, Button, Typography, Box } from "@material-ui/core";
import useStyles from "../modules/panel/PanelView.styles";

interface TopMenuProps {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  listMenu: string[];
}

const TopMenu: React.FC<TopMenuProps> = ({ value, setValue, listMenu }) => {
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const classes = useStyles();
  return (
    <>
      <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
        {listMenu.map((content, i) => (
          <Tab label={content} {...a11yProps(i)} key={i} />
        ))}
        <Typography className={classes.typographyHello}>Hello, Raf</Typography>
        <Button color="inherit">Sign out</Button>
      </Tabs>
    </>
  );
};

/*color: inherit;
    opacity: 0.7;
    padding: 6px 12px; */

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
};

export default TopMenu;
