import { makeStyles } from "@material-ui/styles";
import { Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      backgroundColor: theme.palette.secondary.light,
      paddingBottom: "10px",
      marginBottom: "15px",
      border: "1px solid #949494d9"
    },
    wrapDataTrainer: {
      display: "flex"
    },

    cardHeader: {
      paddingBottom: 0
    },
    cardContent: {
      padding: 0
    },
    list: {
      padding: 0
    },
    listItemIcon: {
      minWidth: "auto",
      paddingRight: "10px"
    },
    btnBack: {
      marginLeft: "8px"
    },
    datePickerInput: {
      height: "30px",
      minWidth: "220px",
      borderRadius: "5px",
      border: "1px solid gray",
      padding: "4px 10px",
      fontWeight: 500,
      textTransform: "uppercase",
      // color: theme.palette.primary.contrastText,
      color: "#ffffffde",
      backgroundColor: theme.palette.primary.main,
      fontSize: "0.84rem",
      letterSpacing: "0.02857em",
      fontFamily: "Roboto",
      transition: ".2s linear",
      "&:hover": {
        backgroundColor: "#0E4686",
        cursor: "pointer"
      }
    }
  })
);

export default useStyles;
