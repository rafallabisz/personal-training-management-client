import React from "react";
import Copyright from "../../../utils/Copyright";
import useStyles from "./RegisterPage.styles";
import { Container, Avatar, Typography, Box } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import RegisterForm from "./RegisterForm";

interface RegisterPageProps {}

const RegisterPage: React.FC<RegisterPageProps> = props => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <RegisterForm />
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};
export default RegisterPage;
