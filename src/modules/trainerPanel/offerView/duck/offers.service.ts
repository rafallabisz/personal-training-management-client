import { AddOffer, OfferResponse } from "./offers.interfaces";
import axios, { AxiosPromise } from "axios";

export const postNewOffer = (trainerId: string, addOffer: AddOffer): AxiosPromise<OfferResponse[]> => {
  return axios.post<OfferResponse[]>(`http://localhost:5000/trainer/${trainerId}/offers`, {
    description: addOffer.description
  });
};

export const getTrainerOffers = (trainerId: string): AxiosPromise<OfferResponse[]> => {
  return axios.post<OfferResponse[]>(`http://localhost:5000/trainer/${trainerId}/offers`);
};
