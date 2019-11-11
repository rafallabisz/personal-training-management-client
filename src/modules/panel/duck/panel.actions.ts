import { PanelActionTypes } from "./panel.types";
import {
  AddOfferRequestAction,
  AddOfferSuccessAction,
  AddOfferFailureAction,
  DeleteOfferRequestAction,
  DeleteOfferSuccessAction,
  DeleteOfferFailureAction,
  UpdateUserRequestAction,
  UpdateUserFailureAction,
  UpdateUserSuccessAction
} from "./panel.interface";
import { UserData } from "../../auth/duck/auth.interfaces";

export const addOfferRequest = (): AddOfferRequestAction => ({
  type: PanelActionTypes.ADD_OFFER_REQUEST
});

export const addOfferSuccess = (userData: UserData): AddOfferSuccessAction => ({
  type: PanelActionTypes.ADD_OFFER_SUCCESS,
  payload: userData
});

export const addOfferFailure = (error: string): AddOfferFailureAction => ({
  type: PanelActionTypes.ADD_OFFER_FAILURE,
  payload: error
});

export const deleteOfferRequest = (): DeleteOfferRequestAction => ({
  type: PanelActionTypes.DELETE_OFFER_REQUEST
});

export const deleteOfferSuccess = (userData: UserData): DeleteOfferSuccessAction => ({
  type: PanelActionTypes.DELETE_OFFER_SUCCESS,
  payload: userData
});

export const deleteOfferFailure = (error: string): DeleteOfferFailureAction => ({
  type: PanelActionTypes.DELETE_OFFER_FAILURE,
  payload: error
});

/**===update user */

export const updateUserRequest = (): UpdateUserRequestAction => ({
  type: PanelActionTypes.UPDATE_USER_REQUEST
});

export const updateUserSuccess = (userData: UserData): UpdateUserSuccessAction => ({
  type: PanelActionTypes.UPDATE_USER_SUCCESS,
  payload: userData
});

export const updateUserFailure = (error: string): UpdateUserFailureAction => ({
  type: PanelActionTypes.UPDATE_USER_FAILURE,
  payload: error
});
