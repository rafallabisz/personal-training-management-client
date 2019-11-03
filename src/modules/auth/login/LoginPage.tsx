import React from "react";
import { Container, Avatar, Typography, Box, Card } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "../AuthPage.styles";
import LoginForm from "./LoginForm";
import Copyright from "../../../utils/Copyright";

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Container component="main" maxWidth="xs">
          <div className={classes.paper}>
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
      </Card>
    </div>
  );
};

export default LoginPage;
