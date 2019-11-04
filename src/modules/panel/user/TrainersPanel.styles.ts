import { makeStyles } from "@material-ui/styles";
import { Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridRowGap: "35px",
      justifyItems: "center",
      maxHeight: "70vh",
      overflowY: "auto"
    },
    card: {
      backgroundColor: theme.palette.primary.light,
      paddingBottom: "10px",
      width: "35vw"
    },
    cardSearch: {
      backgroundColor: theme.palette.primary.light,
      paddingBottom: "10px",
      marginBottom: "20px"
      // width: "35vw"
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
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "90%",
      marginTop: 0
    },
    btnMoreDetails: {
      marginLeft: "8px"
    }
  })
);

export default useStyles;
