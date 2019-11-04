import { makeStyles } from "@material-ui/styles";
import { Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      maxHeight: "70vh",
      overflowY: "auto"
    },
    card: {
      backgroundColor: theme.palette.primary.light,
      paddingBottom: "10px",
      marginBottom: "15px"
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
    }
  })
);

export default useStyles;
