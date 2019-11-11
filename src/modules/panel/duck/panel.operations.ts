import { OfferDescription, SettingsData } from "./panel.interface";
import { Dispatch, Action, ActionCreator, AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { UserData } from "../../auth/duck/auth.interfaces";
import {
  addOfferRequest,
  addOfferFailure,
  addOfferSuccess,
  deleteOfferRequest,
  deleteOfferFailure,
  deleteOfferSuccess,
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure
} from "./panel.actions";
import { unwrapResponseData } from "../../../utils/unwrapResponseData";
import { panelAddOffer, panelDeleteOffer, panelUpdateUser } from "./panel.service";

export const panelAddOfferActionCreator: ActionCreator<ThunkAction<Promise<Action>, UserData, any, AnyAction>> = (
  description: OfferDescription,
  id: string
) => async (dispatch: Dispatch) => {
  dispatch(addOfferRequest());
  try {
    const userData = await panelAddOffer(description, id).then(unwrapResponseData);
    return dispatch(addOfferSuccess(userData));
  } catch (error) {
    return dispatch(addOfferFailure(error.message));
  }
};

export const panelDeleteOfferActionCreator: ActionCreator<ThunkAction<Promise<Action>, UserData, any, AnyAction>> = (
  userId: string,
  offerId: string
) => async (dispatch: Dispatch) => {
  dispatch(deleteOfferRequest());
  try {
    const userData = await panelDeleteOffer(userId, offerId).then(unwrapResponseData);
    return dispatch(deleteOfferSuccess(userData));
  } catch (error) {
    return dispatch(deleteOfferFailure(error.message));
  }
};

export const panelUpdateUserActionCreator: ActionCreator<ThunkAction<Promise<Action>, UserData, any, AnyAction>> = (
  userId: string,
  settingsData: SettingsData
) => async (dispatch: Dispatch) => {
  dispatch(updateUserRequest());
  try {
    const userData = await panelUpdateUser(userId, settingsData).then(unwrapResponseData);
    return dispatch(updateUserSuccess(userData));
  } catch (error) {
    return dispatch(updateUserFailure(error.message));
  }
};
