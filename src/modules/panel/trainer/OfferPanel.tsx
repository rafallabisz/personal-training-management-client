import React, { useState } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { Store } from "../../auth/duck/auth.interfaces";
import { OfferDescription } from "../duck/panel.interface";
import { panelAddOfferActionCreator } from "../duck/panel.operations";

interface OfferPanelProps {}

const OfferPanel: React.FC<OfferPanelProps> = props => {
  const [offerDescription, setOfferDescription] = useState<OfferDescription>({ description: "" });

  const { offers, _id } = useSelector((state: Store) => state.user.currentUser!);
  const dispatch = useDispatch();
  const handleAddOffer = () => {
    dispatch(panelAddOfferActionCreator(offerDescription, _id));
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const description = e.target.value;
    setOfferDescription({ ...offerDescription, description });
  };

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
            value={offerDescription.description}
            onChange={handleChangeInput}
          />
          <Button
            onClick={() => handleAddOffer()}
            variant="contained"
            color="primary"
            size="small"
            startIcon={<AddCircleIcon />}
          >
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
