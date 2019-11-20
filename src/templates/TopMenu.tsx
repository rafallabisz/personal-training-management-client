import React from "react";
import { Tabs, Tab, Button, Typography } from "@material-ui/core";
import useStyles from "./PanelTemplate.styles";
import { routes } from "../routes";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authSignOut } from "../modules/auth/duck/auth.operations";
import { Store } from "../modules/auth/duck/auth.interfaces";

interface TopMenuProps {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  listMenu: string[];
}

const TopMenu: React.FC<TopMenuProps> = ({ value, setValue, listMenu }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: Store) => state.user);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleSignOut = (): void => {
    dispatch(authSignOut());
  };
  const classes = useStyles();
  return (
    <>
      <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
        <div>
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            {listMenu.map((content, i) => (
              <Tab label={content} {...a11yProps(i)} key={i} className={classes.tabTopMenu} />
            ))}
          </Tabs>
        </div>
        <div style={{ display: "flex" }}>
          <Typography className={classes.typographyHello}>Hello, {currentUser!.firstName}</Typography>
          <Button
            style={{ padding: "6px 20px" }}
            onClick={() => handleSignOut()}
            component={NavLink}
            to={routes.loginPage}
            color="inherit"
          >
            Sign out
          </Button>
        </div>
      </div>
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
