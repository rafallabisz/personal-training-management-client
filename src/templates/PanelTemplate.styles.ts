import { makeStyles } from "@material-ui/styles";
import { Theme, createStyles } from "@material-ui/core";
import bgcImage from "../assets/img/bgc6.jpg";
//#cccbcbd9 -color card trainer

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      backgroundImage: `url(${bgcImage})`,
      height: "100vh",
      overflowY: "hidden",
      backgroundSize: "cover",
      backgroundPosition: "center"
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
      backgroundColor: theme.palette.secondary.light
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
      backgroundColor: theme.palette.secondary.light
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      marginBottom: "0px"
    },
    listDrawer: {
      paddingLeft: "8px"
    },
    typographyNameApp: {
      paddingLeft: "48px",
      letterSpacing: "2px"
    },
    tabTopMenu: {
      transition: ".1s linear",
      "&:hover": {
        backgroundColor: "#135DB1"
      }
    },
    typographyHello: {
      padding: "12px",
      marginRight: "25px",
      marginLeft: "auto"
    },
    titleToolbar: {
      letterSpacing: "2px"
    },
    iconButtonToolbar: {
      padding: "7px"
    },
    wrapTopMenu: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between"
    },
    containerRightElementsTopMenu: {
      display: "flex"
    },
    btnSignOut: {
      padding: "6px 20px"
    },
    avatarSideMenu: {
      width: "28px",
      borderRadius: "50%"
    }
  })
);

export default useStyles;
