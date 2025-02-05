import { makeStyles, Theme, createStyles } from "@material-ui/core";
import bgcAuth from "../../assets/img/bgc-auth2.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    "@global": {
      body: {
        backgroundColor: theme.palette.common.white
      }
    },
    root: {
      backgroundImage: `url(${bgcAuth})`,
      height: "100vh",
      overflow: "auto",
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    card: {
      backgroundColor: theme.palette.primary.light,
      paddingBottom: "10px",
      width: "500px",
      margin: "80px auto 0"
    },
    paper: {
      marginTop: "30px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(1)
    },
    linkToSign: {
      textDecoration: "none"
    },
    radioGroupGender: {
      flexDirection: "row"
    }
  })
);

export default useStyles;
