import { UserData } from "../../auth/duck/auth.interfaces";
import axios, { AxiosPromise } from "axios";
import { OfferDescription, SettingsData } from "./panel.interface";
import { settings } from "cluster";

export const panelAddOffer = (offerDescription: OfferDescription, id: string): AxiosPromise<UserData> => {
  return axios.post<UserData>(`http://localhost:5000/user/offer/${id}`, {
    description: offerDescription.description
  });
};

export const panelDeleteOffer = (userId: string, offerId: string): AxiosPromise<UserData> => {
  return axios.delete<UserData>(`http://localhost:5000/user/offer/${userId}/${offerId}`);
};

export const panelUpdateUser = (userId: string, settingsData: SettingsData): AxiosPromise<UserData> => {
  return axios.put<UserData>(`http://localhost:5000/user/${userId}`, {
    firstName: settingsData.firstName,
    lastName: settingsData.lastName,
    email: settingsData.email,
    password: settingsData.password,
    data: {
      age: settingsData.data.age,
      city: settingsData.data.city,
      phone: settingsData.data.phone
    }
  });
};
