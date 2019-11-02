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
  ListItemText
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
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
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      {children}
    </div>
  );
};

export default PanelTemplate;
