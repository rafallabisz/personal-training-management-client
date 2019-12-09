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
      backgroundColor: theme.palette.secondary.light,
      border: "1px solid #949494d9",
      paddingBottom: "10px",
      width: "35vw"
    },
    avatarComments: {
      width: "50px",
      borderRadius: "50%"
    },
    cardContent: {
      padding: "0 16px",
      "&:last-child": {
        paddingBottom: "0px"
      }
    },
    cardHeader: {
      paddingBottom: "8px"
    }
  })
);

export default useStyles;
