import { AddOffer, OfferResponse } from "./offers.interfaces";
import axios, { AxiosPromise } from "axios";

export const postNewOffer = (trainerId: string, addOffer: AddOffer): AxiosPromise<OfferResponse[]> => {
  return axios.post<OfferResponse[]>(`http://localhost:5000/trainer/${trainerId}/offers`, {
    description: addOffer.description
  });
};

export const getTrainerOffers = (trainerId: string): AxiosPromise<OfferResponse[]> => {
  return axios.get<OfferResponse[]>(`http://localhost:5000/trainer/${trainerId}/offers`);
};

export const deleteTrainerOffer = (trainerId: string, offerId: string): AxiosPromise<OfferResponse[]> => {
  return axios.delete<OfferResponse[]>(`http://localhost:5000/trainer/${trainerId}/${offerId}/offers`);
};
