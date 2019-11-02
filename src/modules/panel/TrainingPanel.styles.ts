import { makeStyles } from "@material-ui/styles";
import { Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      backgroundColor: "#ffffffc2",
      paddingBottom: "10px"
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
    btnSave: {
      marginLeft: "8px"
    }
  })
);

export default useStyles;
