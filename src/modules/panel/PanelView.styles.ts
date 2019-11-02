import { makeStyles } from "@material-ui/styles";
import { Theme, createStyles } from "@material-ui/core";
import bgcImage from "../../assets/img/bgc2.jpg";

const drawerWidth = 240;
//#3f51b5cf headerColor

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      backgroundImage: `url(${bgcImage})`,
      height: "100vh"
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: 36
    },
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap"
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      backgroundColor: "#e3dcdc38"
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1
      },
      backgroundColor: "#e3dcdc38"
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      marginBottom: "16px"
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    listDrawer: {
      paddingLeft: "8px"
    },
    typographyHello: {
      padding: "12px",
      marginRight: "25px",
      marginLeft: "auto"
    },
    typographyNameApp: {
      paddingLeft: "48px",
      letterSpacing: "2px"
    }
  })
);

export default useStyles;
