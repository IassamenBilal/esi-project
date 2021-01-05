import React from "react";
import SideNavBar from "./SideNavBar";
import TopNavBar from "./TopNavBar";

import { PlanDeMaintenanceConsumer } from "./ContextPlanmaintenance";

export default function ComportementConducteur() {
  return (
    <PlanDeMaintenanceConsumer>
      {(value) => {
        return (
          <div className="content">
            <TopNavBar />
            <SideNavBar active={"active-nav-link"} smenu={"display"} />

            <div className="section">
              <h2>Analyse de comportement des conducteurs</h2>

              {/* {value.alert.show && <Alert />} */}

              <div className="plan-maintenance">
                <div className="filtre-intervention">
                  <h3>Filtre</h3>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label htmlFor="statut">Véhicule</label>
                      <select className="form-control">
                        <option value=""></option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="niveau">Conducteur</label>
                      <select className="form-control">
                        <option value=""></option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="piece">Date début</label>
                      <input type="date" className="form-control" />
                    </div>
                    <div>
                      <label htmlFor="datedebut">Date fin</label>
                      <input type="date" className="form-control" />
                    </div>

                    <div className="btn-form">
                      <button className="btn btn-primary">Appliquer</button>
                      <button className="btn btn-primary ml-3">Retour</button>
                    </div>
                  </form>
                </div>
                <hr />
                <div className="table-intervention">
                  <button className="btn btn-primary" style={{ margin: 15 }}>
                    Importer données conducteur
                  </button>

                  <table className="table table-condensed driver-table">
                    <thead>
                      <tr>
                        <th className="text-center">Véhicule </th>
                        <th className="text-center">Conducteur</th>
                        <th className="text-center">Score total</th>
                        <th className="text-center">Vitesse moyenne</th>

                        <th className="text-center">Kilomètrage</th>
                        <th className="text-center">Durée de conduite</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">Véhicule d'appui</td>
                        <td className="text-center">kaddour Ch</td>
                        <td className="text-center">80/100</td>
                        <td className="text-center">50km/h</td>
                        <td className="text-center">18000 km</td>
                        <td className="text-center">100 h</td>
                      </tr>
                      <tr>
                        <td className="text-center">Camion de transport</td>
                        <td className="text-center"> Mohamedi Zk</td>
                        <td className="text-center">50/100</td>
                        <td className="text-center">60km/h</td>
                        <td className="text-center">10000 km</td>
                        <td className="text-center">500 h</td>
                      </tr>
                      <tr>
                        <td className="text-center">Blindé</td>
                        <td className="text-center"> Zlatan mk </td>
                        <td className="text-center">80/100</td>
                        <td className="text-center">40km/h</td>
                        <td className="text-center">10000 km</td>
                        <td className="text-center">350 h</td>
                      </tr>
                    </tbody>
                  </table>

                  {/* <PlanDeMaintenanceConsumer>
                      {(value) => {
                        const {
                          plansDeMaintenance,
                          plansDeMaintenanceFilter,
                        } = value;
                        if (!value.filter) {
                          if (plansDeMaintenance.length === 0) {
                            return;
                          } else {
                            return plansDeMaintenance.map((plan) => {
                              return (
                                <TableauPlanningDeMaintenance
                                  key={plan.id}
                                  plan={plan}
                                />
                              );
                            });
                          }
                        } else {
                          if (plansDeMaintenanceFilter.length === 0) {
                            return;
                          } else {
                            return plansDeMaintenanceFilter.map((plan) => {
                              return (
                                <TableauPlanningDeMaintenance
                                  key={plan.id}
                                  plan={plan}
                                />
                              );
                            });
                          }
                        }
                      }}
                    </PlanDeMaintenanceConsumer> */}
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </PlanDeMaintenanceConsumer>
  );
}
