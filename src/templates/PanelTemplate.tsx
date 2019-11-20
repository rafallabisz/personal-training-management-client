import React from "react";
import useStyles from "./PanelTemplate.styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EmailIcon from "@material-ui/icons/Email";
import DateRangeIcon from "@material-ui/icons/DateRange";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import clsx from "clsx";
import TopMenu from "./TopMenu";
import { useSelector } from "react-redux";
import { Store } from "../modules/auth/duck/auth.interfaces";

interface PanelTemplateProps {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  children: React.ReactNode;
  listMenu: string[];
}

const PanelTemplate: React.FC<PanelTemplateProps> = ({ value, setValue, children, listMenu }) => {
  const classes = useStyles();
  const currentUser = useSelector((state: Store) => state.user.currentUser!);
  const [open, setOpen] = React.useState<boolean>(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar style={{ minHeight: "50px" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <TopMenu value={value} setValue={setValue} listMenu={listMenu} />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}
      >
        <div className={classes.toolbar} style={{ minHeight: "50px" }}>
          <span className={classes.titleToolbar}>Training Management</span>
          <IconButton className={classes.iconButtonToolbar} onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List className={classes.listDrawer}>
          <ListItem>
            <Tooltip title="Name">
              <ListItemIcon>{<AccountCircleIcon />}</ListItemIcon>
            </Tooltip>
            <ListItemText primary={`${currentUser.firstName} ${currentUser.lastName}`} />
          </ListItem>

          <ListItem>
            <Tooltip title="City">
              <ListItemIcon>{<LocationOnIcon />}</ListItemIcon>
            </Tooltip>
            <ListItemText primary={currentUser.data ? currentUser.data.city : "-"} />
          </ListItem>

          <ListItem>
            <Tooltip title="Age">
              <ListItemIcon>{<DateRangeIcon />}</ListItemIcon>
            </Tooltip>
            <ListItemText primary={currentUser.data ? currentUser.data.age : "-"} />
          </ListItem>

          <ListItem>
            <Tooltip title="Phone">
              <ListItemIcon>{<PhoneIcon />}</ListItemIcon>
            </Tooltip>
            <ListItemText primary={currentUser.data ? currentUser.data.phone : "-"} />
          </ListItem>

          <ListItem>
            <Tooltip title="Email">
              <ListItemIcon>{<EmailIcon />}</ListItemIcon>
            </Tooltip>
            <ListItemText primary={currentUser.email} />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      {children}
    </div>
  );
};

export default PanelTemplate;
