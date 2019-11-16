import { OfferActionTypes } from "./offers.types";

export interface AddOffer {
  description: string;
}

export interface OfferResponse {
  _id: string;
  description: string;
}

/**=== Action Offer Interfaces */

export interface AddOfferRequestAction {
  type: OfferActionTypes.ADD_OFFER_REQUEST;
}

export interface AddOfferSuccessAction {
  type: OfferActionTypes.ADD_OFFER_SUCCESS;
  payload: OfferResponse[];
}

export interface AddOfferFailureAction {
  type: OfferActionTypes.ADD_OFFER_FAILURE;
  payload: string;
}

export interface GetOfferRequestAction {
  type: OfferActionTypes.GET_OFFER_REQUEST;
}

export interface GetOfferSuccessAction {
  type: OfferActionTypes.GET_OFFER_SUCCESS;
  payload: OfferResponse[];
}

export interface GetOfferFailureAction {
  type: OfferActionTypes.GET_OFFER_FAILURE;
  payload: string;
}

export interface DeleteOfferRequestAction {
  type: OfferActionTypes.DELETE_OFFER_REQUEST;
}

export interface DeleteOfferSuccessAction {
  type: OfferActionTypes.DELETE_OFFER_SUCCESS;
  payload: OfferResponse[];
}

export interface DeleteOfferFailureAction {
  type: OfferActionTypes.DELETE_OFFER_FAILURE;
  payload: string;
}

export type OfferActions =
  | AddOfferRequestAction
  | AddOfferSuccessAction
  | AddOfferFailureAction
  | GetOfferRequestAction
  | GetOfferSuccessAction
  | GetOfferFailureAction
  | DeleteOfferRequestAction
  | DeleteOfferSuccessAction
  | DeleteOfferFailureAction;

/**=== Reducer Interface === */

export interface OfferReducerState {
  offers: OfferResponse[];
  isFetching: boolean;
  error?: string;
}
