import React, { useState } from "react";
import useStyles from "../AuthPage.styles";
import { Grid, TextField, FormControlLabel, Checkbox, Button } from "@material-ui/core";
import { NavLink, Redirect } from "react-router-dom";
import { routes } from "../../../routes";
import { SignUpCredentials, Store } from "../duck/auth.interfaces";
import { authSignUpActionCreator } from "../duck/auth.operations";
import { useDispatch, useSelector } from "react-redux";
import SpinnerButton from "../../../utils/SpinnerButton";

interface RegisterFormProps {}

const RegisterForm: React.FC<RegisterFormProps> = props => {
  const dispatch = useDispatch();
  const { isFetching, error, isAuth } = useSelector((state: Store) => state.user);
  const initRegisterData = {
    firstName: "",
    lastName: "",
    email: "",
    isTrainer: false,
    password: ""
  };
  const [registerData, setRegisterData] = useState<SignUpCredentials>(initRegisterData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const name = e.target.name;
    const value = e.target.value;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleChangeCheckbox = (checked: boolean) => {
    setRegisterData({ ...registerData, isTrainer: checked });
  };

  const handleSignUp = (e: React.SyntheticEvent<any, Event>) => {
    e.preventDefault();
    dispatch(authSignUpActionCreator(registerData));
  };
  console.log(registerData);
  const classes = useStyles();

  if (isAuth) {
    return <Redirect to={routes.main} />;
  }
  return (
    <form className={classes.form} noValidate onSubmit={(e: React.SyntheticEvent<any, Event>) => handleSignUp(e)}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="fname"
            name="firstName"
            variant="outlined"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
            value={registerData.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lname"
            value={registerData.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={registerData.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={registerData.password}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="Personal trainer"
            name="isTrainer"
            checked={registerData.isTrainer}
            onChange={(e: React.ChangeEvent<{}>, checked: boolean) => {
              handleChangeCheckbox(checked);
            }}
          />
        </Grid>
      </Grid>
      <SpinnerButton isFetching={isFetching}>Sign Up</SpinnerButton>
      <Grid container justify="center">
        <Grid item>
          <NavLink to={routes.loginPage} className={classes.linkToSign}>
            Already have an account? Sign in
          </NavLink>
        </Grid>
      </Grid>
    </form>
  );
};
export default RegisterForm;
