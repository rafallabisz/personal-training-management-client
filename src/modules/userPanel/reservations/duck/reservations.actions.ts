import {
  AddReservationRequestAction,
  AddReservationSuccessAction,
  AddReservationFailureAction,
  GetTrainerReservationsRequestAction,
  GetTrainerReservationsSuccessAction,
  Reservation,
  GetTrainerReservationsFailureAction,
  GetUserReservationsRequestAction,
  GetUserReservationsSuccessAction,
  GetUserReservationsFailureAction
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

export const getTrainerReservationsRequest = (): GetTrainerReservationsRequestAction => ({
  type: ReservationActionTypes.GET_TRAINER_RESERVATIONS_REQUEST
});

export const getTrainerReservationsSuccess = (reservations: Reservation[]): GetTrainerReservationsSuccessAction => ({
  type: ReservationActionTypes.GET_TRAINER_RESERVATIONS_SUCCESS,
  payload: reservations
});

export const getTrainerReservationsFailure = (error: string): GetTrainerReservationsFailureAction => ({
  type: ReservationActionTypes.GET_TRAINER_RESERVATIONS_FAILURE,
  payload: error
});

export const getUserReservationsRequest = (): GetUserReservationsRequestAction => ({
  type: ReservationActionTypes.GET_USER_RESERVATIONS_REQUEST
});

export const getUserReservationsSuccess = (reservations: Reservation[]): GetUserReservationsSuccessAction => ({
  type: ReservationActionTypes.GET_USER_RESERVATIONS_SUCCESS,
  payload: reservations
});

export const getUserReservationsFailure = (error: string): GetUserReservationsFailureAction => ({
  type: ReservationActionTypes.GET_USER_RESERVATIONS_FAILURE,
  payload: error
});
