import { makeStyles } from "@material-ui/styles";
import { Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      backgroundColor: theme.palette.secondary.light,
      paddingBottom: "10px",
      width: "35vw",
      transition: ".1s linear",
      border: "1px solid #949494d9",
      "&:hover": {
        cursor: "pointer",
        backgroundColor: theme.palette.secondary.contrastText
      }
    },
    cardHeader: {
      paddingBottom: 0
    },
    cardContent: {
      padding: 0
    },
    offerList: {
      display: "flex",
      flexWrap: "wrap",
      listStyleType: "square"
    },

    offerListItem: {
      marginLeft: "30px"
    },

    btnMoreDetails: {
      marginLeft: "8px"
    }
  })
);

export default useStyles;
