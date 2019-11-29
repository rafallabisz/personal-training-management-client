import { makeStyles } from "@material-ui/styles";
import { Theme, createStyles } from "@material-ui/core";

const useStylesUserReservationsList = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      backgroundColor: theme.palette.secondary.light,
      border: "1px solid #949494d9",
      paddingBottom: "10px",
      maxHeight: "80vh",
      overflowY: "auto"
    },
    title: {
      fontSize: "22px",
      letterSpacing: "1px",
      fontWeight: 500
    },
    table: {
      minWidth: 650
    }
  })
);

export default useStylesUserReservationsList;
