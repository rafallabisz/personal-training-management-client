import { OfferResponse, AddOffer } from "./offers.interfaces";
import { ActionCreator, Action, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import {
  addOfferRequest,
  addOfferSuccess,
  addOfferFailure,
  getOfferRequest,
  getOfferSuccess,
  getOfferFailure,
  deleteOfferRequest,
  deleteOfferSuccess,
  deleteOfferFailure
} from "./offers.actions";
import { unwrapResponseData } from "../../../../utils/unwrapResponseData";
import { postNewOffer, getTrainerOffers, deleteTrainerOffer } from "./offers.service";

export const addOfferActionCreator: ActionCreator<ThunkAction<Promise<Action>, OfferResponse[], any, AnyAction>> = (
  trainerId: string,
  addOffer: AddOffer
) => async (dispatch: Dispatch) => {
  dispatch(addOfferRequest());
  try {
    const offers = await postNewOffer(trainerId, addOffer).then(unwrapResponseData);
    return dispatch(addOfferSuccess(offers));
  } catch (error) {
    return dispatch(addOfferFailure(error.message));
  }
};

export const getOfferActionCreator: ActionCreator<ThunkAction<Promise<Action>, OfferResponse[], string, AnyAction>> = (
  trainerId: string
) => async (dispatch: Dispatch) => {
  dispatch(getOfferRequest());
  try {
    const offers = await getTrainerOffers(trainerId).then(unwrapResponseData);
    return dispatch(getOfferSuccess(offers));
  } catch (error) {
    return dispatch(getOfferFailure(error.message));
  }
};

export const deleteOfferActionCreator: ActionCreator<ThunkAction<
  Promise<Action>,
  OfferResponse[],
  string,
  AnyAction
>> = (trainerId: string, offerId: string) => async (dispatch: Dispatch) => {
  dispatch(deleteOfferRequest());
  try {
    const offers = await deleteTrainerOffer(trainerId, offerId).then(unwrapResponseData);
    return dispatch(deleteOfferSuccess(offers));
  } catch (error) {
    return dispatch(deleteOfferFailure(error.message));
  }
};
