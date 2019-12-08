import React from "react";
import { UserData } from "../modules/auth/duck/auth.interfaces";
import { Redirect } from "react-router-dom";
import { routes } from "../routes";

const VerificationWhoIsLogging = (currentUser: UserData | undefined) => {
  if (currentUser === undefined) return <Redirect to={routes.loginPage} />;
  const isTrainer = currentUser.isTrainer;
  if (isTrainer) {
    return <Redirect to={routes.offers} />;
  } else {
    return <Redirect to={routes.main} />;
  }
};

export default VerificationWhoIsLogging;
