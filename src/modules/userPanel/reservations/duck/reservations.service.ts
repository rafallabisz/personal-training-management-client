import { ReservationResponse, Reservation } from "./reservations.interfaces";
import axios, { AxiosPromise } from "axios";

export const sendNewReservation = (id: string, reservation: Reservation) => {
  return axios.post(`http://localhost:5000/api/reservations/${id}`, reservation);
};

export const fetchReservations = (id: string): AxiosPromise<ReservationResponse[]> => {
  return axios.get<ReservationResponse[]>(`http://localhost:5000/api/reservations/${id}`);
};
