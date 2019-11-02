import { makeStyles } from "@material-ui/styles";
import { Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      backgroundColor: "#ffffffc2"
    },
    wrapper: {
      display: "flex"
    },
    title: {
      fontSize: "22px",
      letterSpacing: "1px",
      fontWeight: 500
    }
  })
);

export default useStyles;
