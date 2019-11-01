import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { routes } from "../routes";
import LoginPage from "./auth/LoginPage";
import RegisterPage from "./auth/RegisterPage";
const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.loginPage} component={LoginPage} />
        <Route exact path={routes.registerPage} component={RegisterPage} />
        <Redirect to={routes.loginPage} />
      </Switch>
    </Router>
  );
};

export default App;
