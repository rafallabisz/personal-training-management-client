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
import { panelAddOfferActionCreator, panelDeleteOfferActionCreator } from "../duck/panel.operations";
import { KeyCodes } from "../../../utils/keyCodes";

interface OfferPanelProps {}

const OfferPanel: React.FC<OfferPanelProps> = props => {
  const [offerDescription, setOfferDescription] = useState<OfferDescription>({ description: "" });

  const { offers, _id } = useSelector((state: Store) => state.user.currentUser!);
  const dispatch = useDispatch();

  const handleAddOffer = () => {
    dispatch(panelAddOfferActionCreator(offerDescription, _id));
    setOfferDescription({ description: "" });
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const description = e.target.value;
    setOfferDescription({ ...offerDescription, description });
  };

  const handleDeleteOffer = (offerId: string) => {
    const userId = _id;
    dispatch(panelDeleteOfferActionCreator(userId, offerId));
  };

  const submitOnEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.keyCode === KeyCodes.enter) {
      handleAddOffer();
    }
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
            onKeyDown={e => submitOnEnter(e)}
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
            <ListItem key={offer._id}>
              <ListItemText primary={offer.description} className={classes.listItem} />
              <Tooltip title="Delete">
                <DeleteForeverIcon className={classes.iconExit} onClick={() => handleDeleteOffer(offer._id)} />
              </Tooltip>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};
export default OfferPanel;
