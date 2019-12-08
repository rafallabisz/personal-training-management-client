import { OfferActionTypes } from "./offers.types";
import {
  AddOfferRequestAction,
  AddOfferSuccessAction,
  AddOfferFailureAction,
  OfferResponse,
  GetOfferRequestAction,
  GetOfferSuccessAction,
  GetOfferFailureAction,
  DeleteOfferRequestAction,
  DeleteOfferSuccessAction,
  DeleteOfferFailureAction
} from "./offers.interfaces";

export const addOfferRequest = (): AddOfferRequestAction => ({
  type: OfferActionTypes.ADD_OFFER_REQUEST
});

export const addOfferSuccess = (offers: OfferResponse[]): AddOfferSuccessAction => ({
  type: OfferActionTypes.ADD_OFFER_SUCCESS,
  payload: offers
});

export const addOfferFailure = (error: string): AddOfferFailureAction => ({
  type: OfferActionTypes.ADD_OFFER_FAILURE,
  payload: error
});

export const getOfferRequest = (): GetOfferRequestAction => ({
  type: OfferActionTypes.GET_OFFER_REQUEST
});

export const getOfferSuccess = (offers: OfferResponse[]): GetOfferSuccessAction => ({
  type: OfferActionTypes.GET_OFFER_SUCCESS,
  payload: offers
});

export const getOfferFailure = (error: string): GetOfferFailureAction => ({
  type: OfferActionTypes.GET_OFFER_FAILURE,
  payload: error
});

export const deleteOfferRequest = (): DeleteOfferRequestAction => ({
  type: OfferActionTypes.DELETE_OFFER_REQUEST
});

export const deleteOfferSuccess = (offers: OfferResponse[]): DeleteOfferSuccessAction => ({
  type: OfferActionTypes.DELETE_OFFER_SUCCESS,
  payload: offers
});

export const deleteOfferFailure = (error: string): DeleteOfferFailureAction => ({
  type: OfferActionTypes.DELETE_OFFER_FAILURE,
  payload: error
});
