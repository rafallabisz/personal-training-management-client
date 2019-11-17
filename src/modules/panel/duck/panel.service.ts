import { UserData } from "../../auth/duck/auth.interfaces";
import axios, { AxiosPromise } from "axios";
import { SettingsData } from "./panel.interface";

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
