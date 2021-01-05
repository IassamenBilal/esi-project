import React from "react";
import SideNavBar from "./SideNavBar";
import TopNavBar from "./TopNavBar";
import { PlanDeMaintenanceConsumer } from "./ContextPlanmaintenance";
import { Link } from "react-router-dom";
import Alert from "./Alert";
import TableVehicules from "./TableVehicules";

export default function GestionVehicule() {
  return (
    <PlanDeMaintenanceConsumer>
      {(value) => {
        return (
          <div className="content">
            <TopNavBar />
            <SideNavBar />

            <div className="section">
              <h2>Gestion des véhicules</h2>

              {value.alert.show && <Alert />}

              <div className="plan-maintenance">
                <div className="filtre-intervention">
                  <h3>Filtre</h3>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label htmlFor="statut">Etat</label>
                      <select
                        name="etat"
                        className="form-control"
                        value={value.etat}
                        onChange={value.handleChange}
                        disabled={value.filterVehicule}
                      >
                        <option value=""></option>
                        <option value="En marche">En marche</option>
                        <option value="En panne">En panne</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="piece">Modèle</label>
                      <input
                        type="text"
                        name="modele"
                        className="form-control"
                        value={value.modele}
                        onChange={value.handleChange}
                        disabled={value.filterVehicule}
                      />
                    </div>
                    <div>
                      <label>Matricule</label>
                      <input
                        type="number"
                        name="matricule"
                        className="form-control"
                        value={value.matricule}
                        onChange={value.handleChange}
                        disabled={value.filterVehicule}
                      />
                    </div>
                    <div>
                      <label htmlFor="niveau">Marque</label>
                      <input
                        type="text"
                        name="marque"
                        className="form-control"
                        value={value.marque}
                        onChange={value.handleChange}
                        disabled={value.filterVehicule}
                      />
                    </div>
                    <div>
                      <label htmlFor="datedebut">Année</label>
                      <input
                        type="number"
                        name="annee"
                        className="form-control"
                        value={value.annee}
                        onChange={value.handleChange}
                        disabled={value.filterVehicule}
                      />
                    </div>

                    <div>
                      <label htmlFor="intervalle">Kilomètrage</label>
                      <input
                        type="number"
                        name="kilometrage"
                        className="form-control"
                        value={value.kilometrage}
                        onChange={value.handleChange}
                        disabled={value.filterVehicule}
                      />
                    </div>
                    <div className="btn-form">
                      <button
                        className="btn btn-primary"
                        onClick={value.handleFilterVehicule}
                        disabled={value.filterVehicule}
                      >
                        Appliquer
                      </button>
                      <button
                        className="btn btn-primary ml-3"
                        onClick={value.handleCancelFilterVehicule}
                        disabled={!value.filterVehicule}
                      >
                        Retour
                      </button>
                    </div>
                  </form>
                </div>
                <hr />
                <div className="table-intervention">
                  <div className="btn-vcl">
                    <Link to="/ajoutervehicule">
                      <button className="btn btn-primary m-3">
                        Ajouter un véhicule
                      </button>
                    </Link>

                    <label className="btn btn-primary">
                      <input
                        type="file"
                        style={{ display: "none" }}
                        onChange={value.handleUploadvehicule}
                      />
                      Importer véhicule
                    </label>
                  </div>
                  <table className="table table-condensed plan-table table-vehicule">
                    <thead>
                      <tr>
                        <th className="text-center">Matricule </th>
                        <th className="text-center">Marque</th>
                        <th className="text-center">Modèle</th>
                        <th className="text-center">Année</th>
                        <th className="text-center">Kilomètrage</th>
                        <th className="text-center">Etat</th>

                        <th>{""}</th>
                        <th>{""}</th>
                        <th>{""}</th>
                        <th>{""}</th>
                      </tr>
                    </thead>
                  </table>

                  <PlanDeMaintenanceConsumer>
                    {(value) => {
                      const { vehicules, vehiculesFilter } = value;
                      if (!value.filterVehicule) {
                        if (vehicules.length === 0) {
                          return;
                        } else {
                          return vehicules.map((vehicule) => {
                            return (
                              <TableVehicules
                                key={vehicule.idVehicule}
                                vehicule={vehicule}
                              />
                            );
                          });
                        }
                      } else {
                        if (vehiculesFilter.length === 0) {
                          return;
                        } else {
                          return vehiculesFilter.map((vehicule) => {
                            return (
                              <TableVehicules
                                key={vehicule.idVehicule}
                                vehicule={vehicule}
                              />
                            );
                          });
                        }
                      }
                    }}
                  </PlanDeMaintenanceConsumer>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </PlanDeMaintenanceConsumer>
  );
}
