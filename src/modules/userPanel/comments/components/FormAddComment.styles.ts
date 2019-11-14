import { makeStyles } from "@material-ui/styles";
import { Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      backgroundColor: theme.palette.primary.light,
      paddingBottom: "10px",
      marginBottom: "15px"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "85%"
    },
    textFieldAuthor: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "85%",
      marginTop: 0
    }
  })
);

export default useStyles;
