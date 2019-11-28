import { ReservationReducerState, ReservationActions } from "./reservations.interfaces";
import { Reducer } from "redux";
import { ReservationActionTypes } from "./reservations.types";

const initState: ReservationReducerState = {
  reservations: [],
  isFetching: false
};

export const reservationReducer: Reducer<ReservationReducerState, ReservationActions> = (state = initState, action) => {
  switch (action.type) {
    case ReservationActionTypes.ADD_RESERVATION_REQUEST:
    case ReservationActionTypes.GET_TRAINER_RESERVATIONS_REQUEST:
    case ReservationActionTypes.GET_USER_RESERVATIONS_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case ReservationActionTypes.ADD_RESERVATION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: undefined
      };

    case ReservationActionTypes.GET_TRAINER_RESERVATIONS_SUCCESS:
    case ReservationActionTypes.GET_USER_RESERVATIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: undefined,
        reservations: action.payload
      };

    case ReservationActionTypes.ADD_RESERVATION_FAILURE:
    case ReservationActionTypes.GET_TRAINER_RESERVATIONS_FAILURE:
    case ReservationActionTypes.GET_USER_RESERVATIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
