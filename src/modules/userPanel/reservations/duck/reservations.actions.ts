import {
  AddReservationRequestAction,
  AddReservationSuccessAction,
  AddReservationFailureAction,
  Reservation,
  GetReservationsRequestAction,
  GetReservationsSuccessAction,
  GetReservationsFailureAction
} from "./reservations.interfaces";
import { ReservationActionTypes } from "./reservations.types";

export const addReservationRequest = (): AddReservationRequestAction => ({
  type: ReservationActionTypes.ADD_RESERVATION_REQUEST
});

export const addReservationSuccess = (): AddReservationSuccessAction => ({
  type: ReservationActionTypes.ADD_RESERVATION_SUCCESS
});

export const addReservationFailure = (error: string): AddReservationFailureAction => ({
  type: ReservationActionTypes.ADD_RESERVATION_FAILURE,
  payload: error
});

export const getReservationsRequest = (): GetReservationsRequestAction => ({
  type: ReservationActionTypes.GET_RESERVATIONS_REQUEST
});

export const getReservationsSuccess = (reservations: Reservation[]): GetReservationsSuccessAction => ({
  type: ReservationActionTypes.GET_RESERVATIONS_SUCCESS,
  payload: reservations
});

export const getReservationsFailure = (error: string): GetReservationsFailureAction => ({
  type: ReservationActionTypes.GET_RESERVATIONS_FAILURE,
  payload: error
});
