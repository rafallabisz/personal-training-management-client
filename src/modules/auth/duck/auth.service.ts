import { SignInCredentials, UserData } from "./auth.interfaces";
import axios, { AxiosPromise } from "axios";

export const authSignIn = (loginData: SignInCredentials): AxiosPromise<UserData> => {
  return axios.post("http://localhost:5000/auth/login", {
    email: loginData.email,
    password: loginData.password
  });
};
