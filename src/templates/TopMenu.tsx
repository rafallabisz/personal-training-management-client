import React from "react";
import { Button, Typography } from "@material-ui/core";
import useStyles from "./PanelTemplate.styles";
import { routes } from "../routes";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authSignOut } from "../modules/auth/duck/auth.operations";
import { Store } from "../modules/auth/duck/auth.interfaces";
import { useLocation } from "react-router";

interface TopMenuProps {}
export interface ListMenu {
  content: string;
  route: string;
}
const TopMenu: React.FC<TopMenuProps> = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { firstName, isTrainer } = useSelector((state: Store) => state.user.currentUser!);

  const handleSignOut = (): void => {
    dispatch(authSignOut());
  };

  return (
    <>
      <nav className={classes.wrapTopMenu}>
        <div className={classes.containerNavElement}>
          {isTrainer ? (
            <>
              <NavLink exact to={routes.offers} className={classes.navLinkMenu} activeClassName={classes.activeMenu}>
                Offer
              </NavLink>
              <NavLink exact to={routes.comments} className={classes.navLinkMenu} activeClassName={classes.activeMenu}>
                Comments
              </NavLink>
              <NavLink exact to={routes.settings} className={classes.navLinkMenu} activeClassName={classes.activeMenu}>
                Settings
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                exact
                to={routes.main}
                className={`${classes.navLinkMenu} ${pathname === routes.reservation && classes.activeMenu}`}
                activeClassName={classes.activeMenu}
              >
                Trainers
              </NavLink>
              <NavLink
                exact
                to={routes.myReservations}
                className={classes.navLinkMenu}
                activeClassName={classes.activeMenu}
              >
                My Reservations
              </NavLink>
              <NavLink exact to={routes.settings} className={classes.navLinkMenu} activeClassName={classes.activeMenu}>
                Settings
              </NavLink>
            </>
          )}
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
      </nav>
    </>
  );
};

export default TopMenu;
