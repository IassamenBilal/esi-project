import React from "react";

import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Accueil from "./components/Accueil";
import PlanMaintenance from "./components/PlanMaintenance";
import CreerPlanDeMaintenance from "./components/CreerPlanDeMaintenance";
import EditPlanDeMaintenance from "./components/EditPlanDeMaintenance";
import GestionVehicule from "./components/GestionVehicule";
import AjouterVehicule from "./components/AjouterVehicule";
import EditerVehicule from "./components/EditerVehicule";
import ComportementConducteur from "./components/ComportementConducteur";
import Configuration from "./components/Configuration";
import AboutPage from "./components/AboutPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Parametres from "./components/Parametres";
import Dashboard from "./components/Dashboard";
import Calendrier from "./components/Calendrier";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/sub" exact component={SignUp}></Route>
        <Route path="/home" exact component={Accueil}></Route>
        <Route
          path="/planmaintenance"
          exact
          component={PlanMaintenance}
        ></Route>
        <Route
          path="/creerplandemaintenance"
          exact
          component={CreerPlanDeMaintenance}
        ></Route>
        <Route
          path="/editplanmaintenance"
          exact
          component={EditPlanDeMaintenance}
        ></Route>
        <Route
          path="/gestionvehicule"
          exact
          component={GestionVehicule}
        ></Route>
        <Route
          path="/ajoutervehicule"
          exact
          component={AjouterVehicule}
        ></Route>
        <Route path="/editvehicule" exact component={EditerVehicule}></Route>
        <Route
          path="/comportementconducteur"
          exact
          component={ComportementConducteur}
        ></Route>
        <Route path="/config" exact component={Configuration}></Route>
        <Route path="/dashboard" exact component={Dashboard}></Route>
        <Route path="/about" exact component={AboutPage}></Route>
        <Route path="/parametres" exact component={Parametres}></Route>
        <Route path="/calendar" exact component={Calendrier}></Route>
      </Switch>
    </div>
  );
}

export default App;
