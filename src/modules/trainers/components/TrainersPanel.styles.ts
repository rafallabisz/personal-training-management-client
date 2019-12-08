import { makeStyles } from "@material-ui/styles";
import { Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      maxHeight: "70vh",
      overflowY: "auto"
      // marginTop: "30px"
    },
    containerCardTrainers: {
      minHeight: "116px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridRowGap: "35px",
      justifyItems: "center"
      // maxHeight: "70vh",
      // overflowY: "auto"
    },
    cardSearch: {
      backgroundColor: theme.palette.primary.light,
      paddingBottom: "10px",
      marginBottom: "20px"
      // width: "35vw"
    },

    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "90%",
      marginTop: 0
    }
  })
);

export default useStyles;
