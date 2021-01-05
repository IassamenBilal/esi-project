import React from "react";

import SideNavBar from "./SideNavBar";
import TopNavBar from "./TopNavBar";
import { PlanDeMaintenanceConsumer } from "./ContextPlanmaintenance";
import { Link } from "react-router-dom";
import Alert from "./Alert";

export default function EditerVehicule() {
  return (
    <PlanDeMaintenanceConsumer>
      {(value) => {
        return (
          <div className="content">
            <TopNavBar />

            <SideNavBar />
            <div className="section1">
              <h2>Modifier un véhicule</h2>
              <PlanDeMaintenanceConsumer>
                {(value) => {
                  return value.alert.show && <Alert />;
                }}
              </PlanDeMaintenanceConsumer>
              <div className="plan-maintenance1">
                <form
                  action=""
                  className="form-group"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="form1">
                    <div className="labels">
                      <div>
                        <label htmlFor="niveau">Matricule</label>
                      </div>
                      <div>
                        <label htmlFor="statut">Etat</label>
                      </div>
                      <div>
                        <label htmlFor="repeter">Marque</label>
                      </div>
                      <div>
                        <label htmlFor="">Modèle</label>
                      </div>
                      <div>
                        <label htmlFor="piece">Année</label>
                      </div>
                      <div>
                        <label htmlFor="description">Kilométrage</label>
                      </div>
                      <div>
                        <label htmlFor="datedebut">
                          Expérience utilisateur
                        </label>
                      </div>
                    </div>

                    <div className="inputs">
                      <div>
                        <input
                          name="matricule"
                          className="form-control"
                          onChange={value.handleChange}
                          value={value.matricule}
                        />
                      </div>
                      <div>
                        <select
                          name="etat"
                          className="form-control"
                          onChange={value.handleChange}
                          value={value.etat}
                        >
                          <option>{""}</option>
                          <option value="En marche">En marche</option>
                          <option value="En panne">En panne</option>
                        </select>
                      </div>
                      <div>
                        <input
                          name="marque"
                          className="form-control"
                          onChange={value.handleChange}
                          value={value.marque}
                        />
                      </div>
                      <div>
                        <input
                          name="modele"
                          className="form-control"
                          onChange={value.handleChange}
                          value={value.modele}
                        />
                      </div>
                      <div>
                        <input
                          name="annee"
                          className="form-control"
                          onChange={value.handleChange}
                          value={value.annee}
                        />
                      </div>
                      <div>
                        <input
                          name="kilometrage"
                          className="form-control"
                          onChange={value.handleChange}
                          value={value.kilometrage}
                        />
                      </div>
                      <div>
                        <textarea
                          name="experience"
                          cols="4"
                          rows="4"
                          className="form-control"
                          onChange={value.handleChange}
                          value={value.experience}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="buttons">
                    <Link to="/gestionvehicule">
                      <button className="btn btn-primary">Annuler</button>
                    </Link>

                    <button
                      className="btn btn-primary  btn-creer"
                      onClick={value.addVehicule}
                    >
                      Modifier
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
