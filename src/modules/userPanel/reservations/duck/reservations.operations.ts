import { ActionCreator, Action, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { ReservationResponse, Reservation } from "./reservations.interfaces";
import {
  addReservationRequest,
  addReservationSuccess,
  addReservationFailure,
  getReservationsRequest,
  getReservationsSuccess,
  getReservationsFailure
} from "./reservations.actions";
import { sendNewReservation, fetchReservations } from "./reservations.service";
import { unwrapResponseData } from "../../../../utils/unwrapResponseData";

export const addReservationActionCreator: ActionCreator<ThunkAction<Promise<Action>, any, any, AnyAction>> = (
  id: string,
  reservation: Reservation
) => async (dispatch: Dispatch) => {
  dispatch(addReservationRequest());
  try {
    await sendNewReservation(id, reservation);
    return dispatch(addReservationSuccess());
  } catch (error) {
    return dispatch(addReservationFailure(error.message));
  }
};

export const getReservationsActionCreator: ActionCreator<ThunkAction<
  Promise<Action>,
  ReservationResponse[],
  string,
  AnyAction
>> = (id: string) => async (dispatch: Dispatch) => {
  dispatch(getReservationsRequest());
  try {
    const reservations = await fetchReservations(id).then(unwrapResponseData);
    return dispatch(getReservationsSuccess(reservations));
  } catch (error) {
    return dispatch(getReservationsFailure(error.message));
  }
};
