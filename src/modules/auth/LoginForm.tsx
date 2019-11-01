import React from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import useStyles from "./LoginPage.styles";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes";

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = props => {
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
      />

      <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
        Sign In
      </Button>
      <Grid container justify="center">
        <Grid item>
          <NavLink to={routes.registerPage} className={classes.signUp}>
            Don't have an account? Sign Up
          </NavLink>
        </Grid>
      </Grid>
    </form>
  );
};
export default LoginForm;
