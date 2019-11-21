import { makeStyles } from "@material-ui/styles";
import { Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      marginBottom: "16px"
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      marginTop: "30px"
    }
  })
);

export default useStyles;
