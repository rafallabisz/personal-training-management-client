import { SignInCredentials, UserData, SignUpCredentials } from "./auth.interfaces";
import axios, { AxiosPromise } from "axios";

export const authSignIn = (loginData: SignInCredentials): AxiosPromise<UserData> => {
  return axios.post<UserData>("http://localhost:5000/auth/login", {
    email: loginData.email,
    password: loginData.password
  });
};

export const authSignUp = (registerData: SignUpCredentials): AxiosPromise<UserData> => {
  return axios.post<UserData>("http://localhost:5000/auth/register", {
    firstName: registerData.firstName,
    lastName: registerData.lastName,
    email: registerData.email,
    isTrainer: registerData.isTrainer,
    password: registerData.password
  });
};
