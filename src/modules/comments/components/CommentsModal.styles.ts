import { makeStyles } from "@material-ui/styles";
import { Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dialogCard: {
      marginBottom: "20px"
    },
    avatarComments: {
      width: "50px",
      borderRadius: "50%"
    },
    cardContent: {
      padding: "0 16px 8px",
      "&:last-child": {
        paddingBottom: "8px"
      }
    },
    cardHeader: {
      paddingBottom: "8px"
    }
  })
);

export default useStyles;
