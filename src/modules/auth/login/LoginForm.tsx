import React, { useState } from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import useStyles from "../AuthPage.styles";
import { NavLink } from "react-router-dom";
import { routes } from "../../../routes";
import { LoginData } from "../AuthPage.interfaces";

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = props => {
  const [loginData, setLoginData] = useState<LoginData>({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginData({ ...loginData, [name]: value });
  };

  console.log(loginData);
  const classes = useStyles();
  return (
    <form className={classes.form} noValidate>
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
      />

      <Button
        component={NavLink}
        to={routes.main}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign In
      </Button>
      <Grid container justify="center">
        <Grid item>
          <NavLink to={routes.registerPage} className={classes.linkToSign}>
            Don't have an account? Sign Up
          </NavLink>
        </Grid>
      </Grid>
    </form>
  );
};
export default LoginForm;
