import { makeStyles } from "@material-ui/styles";
import { Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      backgroundColor: theme.palette.secondary.light,
      border: "1px solid #949494d9",
      paddingBottom: "10px",
      maxHeight: "80vh",
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
    },
    avatar: {
      margin: "5px 8px 0"
    },
    gallery: {
      margin: "5px"
    }
  })
);

export default useStyles;
