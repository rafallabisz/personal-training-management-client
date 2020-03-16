import { makeStyles } from "@material-ui/styles";
import { Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      maxHeight: "85vh",
      overflowY: "auto"
    },
    containerCardTrainers: {
      minHeight: "116px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridRowGap: "35px",
      justifyItems: "center"
    },
    wrapOnFilterNav: {
      display: "flex",
      marginBottom: "30px"
    }
  })
);

export default useStyles;
