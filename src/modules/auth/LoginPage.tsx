import React from "react";
import { Container, Avatar, Typography, Box } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./LoginPage.styles";
import LoginForm from "./LoginForm";

interface LoginPageProps {}

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
        <LoginForm />
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"© 2019 Rafal Labisz "}
    </Typography>
  );
};

export default LoginPage;
