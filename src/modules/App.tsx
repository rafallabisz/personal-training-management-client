import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { routes } from "../routes";
import LoginPage from "./auth/login/LoginPage";
import RegisterPage from "./auth/register/RegisterPage";
import TrainersPanel from "./userPanel/trainersView/components/TrainersPanel";
import SettingsPanel from "./trainerPanel/settingsView/SettingsPanel";
import UserReservationsList from "./userPanel/userReservationsList/components/UserReservationsList";
import OfferPanel from "./trainerPanel/offerView/components/OfferPanel";
import CommentsPanel from "./trainerPanel/commentsView/CommentsPanel";
import TrainerReservation from "./userPanel/reservations/components/TrainerReservation";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.loginPage} component={LoginPage} />
        <Route exact path={routes.registerPage} component={RegisterPage} />
        <Route exact path={routes.main} component={TrainersPanel} />
        <Route exact path={routes.myReservations} component={UserReservationsList} />
        <Route exact path={routes.settings} component={SettingsPanel} />
        <Route exact path={routes.offers} component={OfferPanel} />
        <Route exact path={routes.comments} component={CommentsPanel} />
        <Route exact path={routes.detailsTrainer} component={TrainerReservation} />
        <Redirect to={routes.loginPage} />
      </Switch>
    </Router>
  );
};

export default App;
