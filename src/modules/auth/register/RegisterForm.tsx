import React from "react";
import useStyles from "../AuthPage.styles";
import { Grid, TextField, FormControlLabel, Checkbox, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { routes } from "../../../routes";

interface RegisterFormProps {}

const RegisterForm: React.FC<RegisterFormProps> = props => {
  const classes = useStyles();
  return (
    <form className={classes.form} noValidate>
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
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" />} label="Personal trainer" />
        </Grid>
      </Grid>
      <Button
        component={NavLink}
        to={routes.loginPage}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign Up
      </Button>
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
