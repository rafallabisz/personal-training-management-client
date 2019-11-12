import { PanelActionTypes } from "./panel.types";
import { UserData } from "../../auth/duck/auth.interfaces";
export interface OfferDescription {
  description: string;
}

export interface SettingsData {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  data: {
    age?: number;
    city?: string;
    phone?: number;
  };
}

export interface CommentsForm {
  author: string;
  comment: string;
  rating: number;
}

/*====Action Interfaces ====== */

export interface AddOfferRequestAction {
  type: PanelActionTypes.ADD_OFFER_REQUEST;
}

export interface AddOfferSuccessAction {
  type: PanelActionTypes.ADD_OFFER_SUCCESS;
  payload: UserData;
}

export interface AddOfferFailureAction {
  type: PanelActionTypes.ADD_OFFER_FAILURE;
  payload: string;
}

export interface DeleteOfferRequestAction {
  type: PanelActionTypes.DELETE_OFFER_REQUEST;
}

export interface DeleteOfferSuccessAction {
  type: PanelActionTypes.DELETE_OFFER_SUCCESS;
  payload: UserData;
}

export interface DeleteOfferFailureAction {
  type: PanelActionTypes.DELETE_OFFER_FAILURE;
  payload: string;
}

export interface UpdateUserRequestAction {
  type: PanelActionTypes.UPDATE_USER_REQUEST;
}

export interface UpdateUserSuccessAction {
  type: PanelActionTypes.UPDATE_USER_SUCCESS;
  payload: UserData;
}

export interface UpdateUserFailureAction {
  type: PanelActionTypes.UPDATE_USER_FAILURE;
  payload: string;
}
