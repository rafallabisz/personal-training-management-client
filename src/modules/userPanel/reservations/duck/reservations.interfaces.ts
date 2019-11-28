import { ReservationActionTypes } from "./reservations.types";
import { UserData } from "../../../auth/duck/auth.interfaces";

export interface Reservation {
  firstName: string;
  lastName: string;
  selectTrainingType: string;
  reserveDate: Date;
  trainer: UserData;
}

/**=== Action Reservations Interfaces === */

export interface AddReservationRequestAction {
  type: ReservationActionTypes.ADD_RESERVATION_REQUEST;
}

export interface AddReservationSuccessAction {
  type: ReservationActionTypes.ADD_RESERVATION_SUCCESS;
}

export interface AddReservationFailureAction {
  type: ReservationActionTypes.ADD_RESERVATION_FAILURE;
  payload: string;
}

export interface GetTrainerReservationsRequestAction {
  type: ReservationActionTypes.GET_TRAINER_RESERVATIONS_REQUEST;
}

export interface GetTrainerReservationsSuccessAction {
  type: ReservationActionTypes.GET_TRAINER_RESERVATIONS_SUCCESS;
  payload: Reservation[];
}
export interface GetTrainerReservationsFailureAction {
  type: ReservationActionTypes.GET_TRAINER_RESERVATIONS_FAILURE;
  payload: string;
}

export interface GetUserReservationsRequestAction {
  type: ReservationActionTypes.GET_USER_RESERVATIONS_REQUEST;
}

export interface GetUserReservationsSuccessAction {
  type: ReservationActionTypes.GET_USER_RESERVATIONS_SUCCESS;
  payload: Reservation[];
}
export interface GetUserReservationsFailureAction {
  type: ReservationActionTypes.GET_USER_RESERVATIONS_FAILURE;
  payload: string;
}

export type ReservationActions =
  | AddReservationRequestAction
  | AddReservationSuccessAction
  | AddReservationFailureAction
  | GetTrainerReservationsRequestAction
  | GetTrainerReservationsSuccessAction
  | GetTrainerReservationsFailureAction
  | GetUserReservationsRequestAction
  | GetUserReservationsSuccessAction
  | GetUserReservationsFailureAction;

/**=== Reducer Reservation Interface */

export interface ReservationReducerState {
  reservations: Reservation[];
  isFetching: boolean;
  error?: string;
}
