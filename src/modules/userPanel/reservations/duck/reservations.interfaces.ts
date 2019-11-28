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

export interface GetReservationsRequestAction {
  type: ReservationActionTypes.GET_RESERVATIONS_REQUEST;
}

export interface GetReservationsSuccessAction {
  type: ReservationActionTypes.GET_RESERVATIONS_SUCCESS;
  payload: Reservation[];
}
export interface GetReservationsFailureAction {
  type: ReservationActionTypes.GET_RESERVATIONS_FAILURE;
  payload: string;
}

export type ReservationActions =
  | AddReservationRequestAction
  | AddReservationSuccessAction
  | AddReservationFailureAction
  | GetReservationsRequestAction
  | GetReservationsSuccessAction
  | GetReservationsFailureAction;

/**=== Reducer Reservation Interface */

export interface ReservationReducerState {
  reservations: Reservation[];
  isFetching: boolean;
  error?: string;
}
