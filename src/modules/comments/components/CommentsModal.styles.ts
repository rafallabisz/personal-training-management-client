import { makeStyles } from "@material-ui/styles";
import { Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dialogCard: {
      marginBottom: "20px"
    },
    rating: {
      width: "37px",
      height: "37px",
      textAlign: "center",
      display: "inline-block",
      padding: "5px",
      margin: "4px 6px 0 0",
      borderRadius: "50%",
      backgroundColor: "#f5c10430",
      border: "2px solid #f5c104db",
      boxShadow: "1px 0 3px #f5c104db",
      fontWeight: 600
    },
    avatarComments: {
      width: "50px",
      borderRadius: "50%"
    }
  })
);

export default useStyles;
