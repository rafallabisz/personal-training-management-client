import { makeStyles } from "@material-ui/styles";
import { Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      overflow: "hidden",
      flexGrow: 1,
      padding: theme.spacing(3),
      marginTop: "30px"
    }
  })
);

export default useStyles;
