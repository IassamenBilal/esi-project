import React from "react";
import SideNavBar from "./SideNavBar";
import TopNavBar from "./TopNavBar";
import { PlanDeMaintenanceConsumer } from "./ContextPlanmaintenance";
import { Link } from "react-router-dom";
import Alert from "./Alert";
export default function AjouterVehicule() {
  return (
    <PlanDeMaintenanceConsumer>
      {(value) => {
        return (
          <div className="content">
            <TopNavBar />

            <SideNavBar />
            <div className="section1">
              <h2>Ajouter un véhicule</h2>
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
                        <label htmlFor="repeter">Marque</label>
                      </div>
                      <div>
                        <label htmlFor="">Modèle</label>
                      </div>
                      <div>
                        <label htmlFor="piece">Année</label>
                      </div>
                      <div>
                        <label htmlFor="description">Kilomètrage</label>
                      </div>
                      <div>
                        <label htmlFor="description">Image du véhicule</label>
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
                        <input
                          type="text"
                          name="marque"
                          onChange={value.handleChange}
                          className="form-control"
                          value={value.marque}
                        />
                      </div>

                      <div>
                        <input
                          type="text"
                          name="modele"
                          onChange={value.handleChange}
                          className="form-control"
                          value={value.modele}
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          name="annee"
                          onChange={value.handleChange}
                          className="form-control"
                          value={value.annee}
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          name="kilometrage"
                          onChange={value.handleChange}
                          className="form-control"
                          value={value.kilometrage}
                        />
                      </div>
                      <div>
                        <input
                          type="file"
                          onChange={value.handleLoadVehiculeImg}
                          className="form-control"
                        />
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
                      Ajouter
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
