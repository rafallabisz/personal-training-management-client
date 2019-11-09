import React from "react";
import {
  Card,
  CardContent,
  ListItemText,
  List,
  ListItem,
  CardActions,
  Button,
  TextField,
  Tooltip
} from "@material-ui/core";
import useStyles from "./OfferPanel.styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useSelector } from "react-redux";
import { Store } from "../../auth/duck/auth.interfaces";

interface OfferPanelProps {}

const OfferPanel: React.FC<OfferPanelProps> = props => {
  const { offers } = useSelector((state: Store) => state.user.currentUser!);
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <div className={classes.wrapper}>
        <CardContent className={classes.title}>Offer:</CardContent>
        <CardActions>
          <TextField
            id="filled-search"
            label="Add training type"
            type="search"
            className={classes.textField}
            margin="normal"
          />
          <Button variant="contained" color="primary" size="small" startIcon={<AddCircleIcon />}>
            Add
          </Button>
        </CardActions>
      </div>
      <CardContent>
        <List>
          {offers.map(offer => (
            <ListItem>
              <ListItemText primary={offer.description} className={classes.listItem} />
              <Tooltip title="Delete">
                <DeleteForeverIcon className={classes.iconExit} />
              </Tooltip>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};
export default OfferPanel;
