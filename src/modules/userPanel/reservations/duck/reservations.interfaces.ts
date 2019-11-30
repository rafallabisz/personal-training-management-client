import { ReservationActionTypes } from "./reservations.types";
import { UserData } from "../../../auth/duck/auth.interfaces";

export interface Reservation {
  firstName: string;
  lastName: string;
  selectTrainingType: string;
  reserveDate: Date;
  firstNameTrainer: string;
  lastNameTrainer: string;
}

export interface ReservationResponse {
  _id: string;
  firstName: string;
  lastName: string;
  selectTrainingType: string;
  reserveDate: Date;
  firstNameTrainer: string;
  lastNameTrainer: string;
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
  payload: ReservationResponse[];
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
  reservations: ReservationResponse[];
  isFetching: boolean;
  error?: string;
}
