import { makeStyles } from "@material-ui/styles";
import { Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      backgroundColor: theme.palette.primary.light,
      paddingBottom: "10px",
      width: "35vw"
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

    btnMoreDetails: {
      marginLeft: "8px"
    }
  })
);

export default useStyles;
