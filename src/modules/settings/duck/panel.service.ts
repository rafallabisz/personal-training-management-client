import { UserData } from "../../auth/duck/auth.interfaces";
import axios, { AxiosPromise } from "axios";
import { SettingsData } from "./panel.interface";

export const panelUpdateUser = (userId: string, settingsData: SettingsData): AxiosPromise<UserData> => {
  return axios.put<UserData>(`http://localhost:5000/user/${userId}`, settingsData);
};
