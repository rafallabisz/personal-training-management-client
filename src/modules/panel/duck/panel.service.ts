import { UserData } from "../../auth/duck/auth.interfaces";
import axios, { AxiosPromise } from "axios";
import { OfferDescription } from "./panel.interface";

export const panelAddOffer = (offerDescription: OfferDescription, id: string): AxiosPromise<UserData> => {
  return axios.post<UserData>(`http://localhost:5000/user/offer/${id}`, {
    description: offerDescription.description
  });
};
