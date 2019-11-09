import { PanelActionTypes } from "./panel.types";
import { UserData } from "../../auth/duck/auth.interfaces";
export interface OfferDescription {
  description: string;
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
