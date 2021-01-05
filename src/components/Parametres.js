import React, { Component } from "react";
import SideNavBar from "./SideNavBar";
import TopNavBar from "./TopNavBar";
import { Link } from "react-router-dom";
import { PlanDeMaintenanceConsumer } from "./ContextPlanmaintenance";
import TableauPlanningDeMaintenance from "./TableauPlanningDeMaintenance";
import Alert from "./Alert";
export default class Parametres extends Component {
  render() {
    return (
      <PlanDeMaintenanceConsumer>
        {(value) => {
          return (
            <div className="content">
              <TopNavBar />
              <SideNavBar />

              <div className="section">
                <h2>Paramètres</h2>

                {value.alert.show && <Alert />}
                <div className="plan-maintenance1">
                  <form
                    className="form-group"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="form1">
                      <div className="labels">
                        <div>
                          <label htmlFor="niveau">Nom</label>
                        </div>
                        <div>
                          <label htmlFor="repeter">Prénom</label>
                        </div>
                        <div>
                          <label htmlFor="">Email</label>
                        </div>
                        <div>
                          <label htmlFor="piece">Nouveau mot de passe</label>
                        </div>
                      </div>

                      <div className="inputs">
                        <div>
                          <input
                            className="form-control"
                            onChange={value.handleChange}
                            value={value.firstname}
                            name="firstname"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            name="lastname"
                            onChange={value.handleChange}
                            className="form-control"
                            value={value.lastname}
                          />
                        </div>

                        <div>
                          <input
                            type="email"
                            name="email"
                            onChange={value.handleChange}
                            className="form-control"
                            value={value.email}
                          />
                        </div>
                        <div>
                          <input
                            type="password"
                            name="password"
                            onChange={value.handleChange}
                            className="form-control"
                            value={value.password}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="buttons">
                      <button
                        className="btn btn-primary  btn-creer"
                        onClick={value.handleEditProfile}
                      >
                        Sauvegarder
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </PlanDeMaintenanceConsumer>
    );
  }
}
