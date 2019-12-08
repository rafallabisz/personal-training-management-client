import React from "react";
import { Button, Typography } from "@material-ui/core";
import useStyles from "./PanelTemplate.styles";
import { routes } from "../routes";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authSignOut } from "../modules/auth/duck/auth.operations";
import { Store } from "../modules/auth/duck/auth.interfaces";

interface TopMenuProps {}
export interface ListMenu {
  content: string;
  route: string;
}
const TopMenu: React.FC<TopMenuProps> = () => {
  const dispatch = useDispatch();
  const { firstName, isTrainer } = useSelector((state: Store) => state.user.currentUser!);

  const handleSignOut = (): void => {
    dispatch(authSignOut());
  };
  const classes = useStyles();
  let listMenu: ListMenu[] = [];
  if (isTrainer) {
    listMenu = [
      { content: "Offer", route: routes.offers },
      { content: "Comments", route: routes.comments },
      { content: "Settings", route: routes.settings }
    ];
  } else {
    listMenu = [
      { content: "Trainers", route: routes.main },
      { content: "My Reservations", route: routes.myReservations },
      { content: "Settings", route: routes.settings }
    ];
  }

  return (
    <>
      <div className={classes.wrapTopMenu}>
        <div className={classes.containerNavElement}>
          {listMenu.map((menu, i) => (
            <NavLink to={menu.route} className={classes.navlinkMenu} key={i}>
              <Typography className={classes.navElement}>{menu.content}</Typography>
            </NavLink>
          ))}
        </div>
        <div className={classes.containerRightElementsTopMenu}>
          <Typography className={classes.typographyHello}>Hello, {firstName}</Typography>
          <Button
            className={classes.btnSignOut}
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

export default TopMenu;
