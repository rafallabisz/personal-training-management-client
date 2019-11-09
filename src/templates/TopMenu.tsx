import React from "react";
import { Tabs, Tab, Button, Typography } from "@material-ui/core";
import useStyles from "./PanelTemplate.styles";
import { routes } from "../routes";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Store } from "../modules/auth/duck/auth.interfaces";
import { authSignOut } from "../modules/auth/duck/auth.operations";

interface TopMenuProps {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  listMenu: string[];
}

const TopMenu: React.FC<TopMenuProps> = ({ value, setValue, listMenu }) => {
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleSignOut = (): void => {
    dispatch(authSignOut());
  };
  const classes = useStyles();
  return (
    <>
      <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
        {listMenu.map((content, i) => (
          <Tab label={content} {...a11yProps(i)} key={i} className={classes.tabTopMenu} />
        ))}

        <Typography className={classes.typographyHello}>Hello, Raf</Typography>
        <Button onClick={() => handleSignOut()} component={NavLink} to={routes.loginPage} color="inherit">
          Sign out
        </Button>
      </Tabs>
    </>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
};

export default TopMenu;
