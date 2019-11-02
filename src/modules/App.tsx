import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { routes } from "../routes";
import LoginPage from "./auth/login/LoginPage";
import RegisterPage from "./auth/register/RegisterPage";
import PanelView from "./panel/PanelView";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.loginPage} component={LoginPage} />
        <Route exact path={routes.registerPage} component={RegisterPage} />
        <Route exact path={routes.main} component={PanelView} />
        <Redirect to={routes.loginPage} />
      </Switch>
    </Router>
  );
};

export default App;
