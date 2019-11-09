import { makeStyles } from "@material-ui/styles";
import { Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      backgroundColor: theme.palette.primary.light,
      paddingBottom: "10px",
      maxHeight: "70vh",
      overflowY: "auto"
    },
    wrapper: {
      display: "flex",
      flexDirection: "column"
    },
    title: {
      fontSize: "22px",
      letterSpacing: "1px",
      fontWeight: 500,
      paddingBottom: 0
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "90%",
      marginTop: 0
    },
    iconExit: {
      color: theme.palette.error.main,
      transition: ".1s linear",
      "&:hover": {
        cursor: "pointer",
        color: theme.palette.error.dark
      }
    },
    listItem: {
      flex: "none"
    }
  })
);

export default useStyles;
