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
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "90%",
      marginTop: 0
    },
    title: {
      fontSize: "22px",
      letterSpacing: "1px",
      fontWeight: 500
    },
    btnSave: {
      marginLeft: "8px",
      marginTop: "4px"
    }
  })
);

export default useStyles;
