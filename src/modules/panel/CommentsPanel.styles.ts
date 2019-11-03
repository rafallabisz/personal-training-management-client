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
      backgroundColor: theme.palette.primary.light,
      paddingBottom: "10px",
      width: "35vw"
    },
    rating: {
      display: "inline-block",
      padding: "5px",
      margin: "4px 6px 0 0",
      borderRadius: "50%",
      backgroundColor: "#f5c10430",
      border: "2px solid #f5c104db",
      boxShadow: "1px 0 3px #f5c104db",
      fontWeight: 600
    }
  })
);

export default useStyles;
