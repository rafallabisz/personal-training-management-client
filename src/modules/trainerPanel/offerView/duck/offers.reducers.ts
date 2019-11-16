import { OfferReducerState, OfferActions } from "./offers.interfaces";
import { Reducer } from "redux";
import { OfferActionTypes } from "./offers.types";

const initState: OfferReducerState = {
  isFetching: false,
  offers: []
};

export const offerReducer: Reducer<OfferReducerState, OfferActions> = (state = initState, action) => {
  switch (action.type) {
    case OfferActionTypes.ADD_OFFER_REQUEST:
    case OfferActionTypes.GET_OFFER_REQUEST:
    case OfferActionTypes.DELETE_OFFER_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case OfferActionTypes.ADD_OFFER_SUCCESS:
    case OfferActionTypes.GET_OFFER_SUCCESS:
    case OfferActionTypes.DELETE_OFFER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        offers: action.payload,
        error: undefined
      };

    case OfferActionTypes.ADD_OFFER_FAILURE:
    case OfferActionTypes.GET_OFFER_FAILURE:
    case OfferActionTypes.DELETE_OFFER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
