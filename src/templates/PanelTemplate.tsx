import React from "react";
import useStyles from "../modules/panel/PanelView.styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  Typography,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Button
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EmailIcon from "@material-ui/icons/Email";
import DateRangeIcon from "@material-ui/icons/DateRange";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import clsx from "clsx";
import TopMenu from "./TopMenu";

interface PanelTemplateProps {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  children: React.ReactNode;
  listMenu: string[];
}

const PanelTemplate: React.FC<PanelTemplateProps> = ({ value, setValue, children, listMenu }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState<boolean>(false);

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
        <Toolbar>
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

          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h6" noWrap>
                Personal training management
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TopMenu value={value} setValue={setValue} listMenu={listMenu} />
            </Grid>
          </Grid>
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
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List className={classes.listDrawer}>
          <ListItem>
            <Tooltip title="Name">
              <ListItemIcon>{<AccountCircleIcon />}</ListItemIcon>
            </Tooltip>
            <ListItemText primary="Rafał Labisz" />
          </ListItem>

          <ListItem>
            <Tooltip title="Email">
              <ListItemIcon>{<EmailIcon />}</ListItemIcon>
            </Tooltip>
            <ListItemText primary="rafal@gmail.com" />
          </ListItem>

          <ListItem>
            <Tooltip title="Age">
              <ListItemIcon>{<DateRangeIcon />}</ListItemIcon>
            </Tooltip>
            <ListItemText primary="22" />
          </ListItem>

          <ListItem>
            <Tooltip title="City">
              <ListItemIcon>{<LocationOnIcon />}</ListItemIcon>
            </Tooltip>
            <ListItemText primary="Wrocław" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      {children}
    </div>
  );
};

export default PanelTemplate;
