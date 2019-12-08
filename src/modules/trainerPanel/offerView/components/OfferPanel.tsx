import React, { useState, useEffect } from "react";
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
import { Store } from "../../../auth/duck/auth.interfaces";
import { KeyCodes } from "../../../../utils/keyCodes";
import { AddOffer } from "../duck/offers.interfaces";
import { addOfferActionCreator, getOfferActionCreator, deleteOfferActionCreator } from "../duck/offers.operations";
import LoadingContainer from "../../../../utils/LoadingContainer";
import PanelTemplate from "../../../../templates/PanelTemplate";

interface OfferPanelProps {}

const OfferPanel: React.FC<OfferPanelProps> = props => {
  const { _id } = useSelector((state: Store) => state.user.currentUser!);
  const { offers, isFetching, error } = useSelector((state: Store) => state.trainerOffers);
  const dispatch = useDispatch();
  const [offerDescription, setOfferDescription] = useState<AddOffer>({ description: "" });

  useEffect(() => {
    const fetchTrainerOffers = () => {
      const trainerId = _id;
      dispatch(getOfferActionCreator(trainerId));
    };
    fetchTrainerOffers();
  }, []);

  const handleAddOffer = () => {
    const trainerId = _id;
    dispatch(addOfferActionCreator(trainerId, offerDescription));
    setOfferDescription({ description: "" });
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const description = e.target.value;
    setOfferDescription({ ...offerDescription, description });
  };

  const handleDeleteOffer = (offerId: string) => {
    const trainerId = _id;
    dispatch(deleteOfferActionCreator(trainerId, offerId));
  };

  const submitOnEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.keyCode === KeyCodes.enter) {
      handleAddOffer();
    }
  };

  const classes = useStyles();

  return (
    <PanelTemplate>
      <LoadingContainer isFetching={isFetching} errorTxt={error}>
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
      </LoadingContainer>
    </PanelTemplate>
  );
};
export default OfferPanel;
