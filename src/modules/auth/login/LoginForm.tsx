import React, { useState } from "react";
import { TextField, Grid } from "@material-ui/core";
import useStyles from "../AuthPage.styles";
import { NavLink } from "react-router-dom";
import { routes } from "../../../routes";
import { useSelector, useDispatch } from "react-redux";
import { Store, SignInCredentials } from "../duck/auth.interfaces";
import { authSignInActionCreator, authClearErrors } from "../duck/auth.operations";
import SpinnerButton from "../../../utils/SpinnerButton";
import VerificationWhoIsLogging from "../../../utils/VerificationWhoIsLogging";

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = props => {
  const dispatch = useDispatch();
  const { isFetching, error, isAuth, currentUser } = useSelector((state: Store) => state.user);

  const [loginData, setLoginData] = useState<SignInCredentials>({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSignIn = (e: React.SyntheticEvent<any, Event>) => {
    e.preventDefault();
    dispatch(authSignInActionCreator(loginData));
  };

  const handleClearErrors = () => {
    if (error) {
      dispatch(authClearErrors());
    }
  };
  const classes = useStyles();
  const isError = error !== undefined;

  if (isAuth) {
    return VerificationWhoIsLogging(currentUser);
  }
  return (
    <>
      <form className={classes.form} noValidate onSubmit={(e: React.SyntheticEvent<any, Event>) => handleSignIn(e)}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={loginData.email}
          onChange={handleChange}
          error={isError}
          onFocus={() => handleClearErrors()}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={loginData.password}
          onChange={handleChange}
          error={isError}
          helperText={isError && "Incorrect email or password!"}
          onFocus={() => handleClearErrors()}
        />
        <SpinnerButton isFetching={isFetching}>Sign In</SpinnerButton>
        <Grid container justify="center">
          <Grid item>
            <NavLink to={routes.registerPage} className={classes.linkToSign} onClick={() => handleClearErrors()}>
              Don't have an account? Sign Up
            </NavLink>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
export default LoginForm;
