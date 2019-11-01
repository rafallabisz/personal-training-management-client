import React from "react";
import { Container, Avatar, Typography, TextField, Button, Grid, Box } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./LoginPage.styles";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes";

interface LoginPageProps {}

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"© 2019 Rafal Labisz "}
    </Typography>
  );
};

const LoginPage: React.FC<LoginPageProps> = props => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.wrapper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
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
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};
export default LoginPage;
