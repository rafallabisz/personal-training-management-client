import { makeStyles } from "@material-ui/styles";
import { Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      maxHeight: "70vh",
      overflowY: "auto"
    },
    card: {
      backgroundColor: theme.palette.secondary.light,
      paddingBottom: "10px",
      marginBottom: "15px",
      border: "1px solid #949494d9"
    },
    cardContentWrap: {
      display: "flex",
      paddingBottom: "5px"
    },
    containerTrainerData: {
      display: "flex",
      flexDirection: "column",
      margin: "0 20px"
    },

    listItem: {
      padding: "2px 0px"
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
      textAlign: "center",
      fontFamily: "Roboto",
      transition: ".2s linear",
      "&:hover": {
        backgroundColor: "#0E4686",
        cursor: "pointer"
      },
      "&::placeholder": {
        color: "#ffffffde"
      }
    },
    selectTypeTraining: {
      height: "30px",
      padding: "4px 10px",
      fontWeight: 500,
      textTransform: "uppercase",
      borderRadius: "5px",
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
    },
    avatarReservation: {
      width: "170px"
    },
    offerList: {
      listStyleType: "square"
    },

    offerListItem: {
      marginLeft: "30px",
      padding: "2px 0px"
    }
  })
);

export default useStyles;
