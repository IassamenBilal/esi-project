import React, { Component } from "react";
import SideNavBar from "./SideNavBar";
import TopNavBar from "./TopNavBar";
import { Link } from "react-router-dom";
import { PlanDeMaintenanceConsumer } from "./ContextPlanmaintenance";
import TableauPlanningDeMaintenance from "./TableauPlanningDeMaintenance";
import Alert from "./Alert";
export default class PlanMaintenance extends Component {
  render() {
    return (
      <PlanDeMaintenanceConsumer>
        {(value) => {
          return (
            <div className="content">
              <TopNavBar />
              <SideNavBar />

              <div className="section">
                <h2>Liste des actions de maintenance</h2>

                {value.alert.show && <Alert />}

                <div className="plan-maintenance">
                  <div className="filtre-intervention">
                    <h3>Filtre</h3>
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div>
                        <label htmlFor="statut">Statut</label>
                        <select
                          name="statut"
                          className="form-control"
                          onChange={value.handleChange}
                          disabled={value.filter}
                          value={value.statut}
                        >
                          <option value=""></option>
                          <option value="En cours">En cours</option>
                          <option value="Arrete">Arrêté</option>
                          <option value="En pause">En pause</option>
                          <option value="Termine">Terminé</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="niveau">Niveau de maintenance</label>
                        <select
                          name="niveauDeMaintenance"
                          className="form-control"
                          onChange={value.handleChange}
                          value={value.niveauDeMaintenance}
                          disabled={value.filter}
                        >
                          <option value=""></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="piece">Type de pièce</label>
                        <input
                          type="text"
                          name="piece"
                          onChange={value.handleChange}
                          className="form-control"
                          value={value.piece}
                          disabled={value.filter}
                          autoComplete="off"
                        />
                      </div>
                      <div>
                        <label htmlFor="datedebut">Date début</label>
                        <input
                          type="date"
                          name="datedebut"
                          className="form-control"
                          onChange={value.handleChange}
                          value={value.datedebut}
                          disabled={value.filter}
                        />
                      </div>

                      <div>
                        <label>Véhicule</label>
                        <input
                          type="text"
                          name="vehicule"
                          onChange={value.handleChange}
                          className="form-control"
                          value={value.vehicule}
                          disabled={value.filter}
                          autoComplete="off"
                        />
                      </div>
                      <div>
                        <label htmlFor="intervalle">Date fin</label>
                        <input
                          type="date"
                          name="datefin"
                          className="form-control"
                          onChange={value.handleChange}
                          value={value.datefin}
                          disabled={value.filter}
                        />
                      </div>
                      <div className="btn-form">
                        <button
                          className="btn btn-primary"
                          onClick={value.handleFilter}
                          disabled={value.filter}
                        >
                          Appliquer
                        </button>
                        <button
                          className="btn btn-primary ml-3"
                          disabled={!value.filter}
                          onClick={value.handleCancelFilter}
                        >
                          Retour
                        </button>
                      </div>
                    </form>
                  </div>
                  <hr />
                  <div className="table-intervention">
                    <div className="btn-imp">
                      <Link to="/creerplandemaintenance">
                        <button
                          className="btn btn-primary m-3"
                          onClick={value.handleClearInputs}
                          disabled={value.filter}
                        >
                          Créer une action de maintenance
                        </button>
                      </Link>
                    </div>
                    <table className="table table-condensed plan-table">
                      <thead>
                        <tr>
                          <th className="text-center">Niveau </th>
                          <th className="text-center">Occurence</th>
                          <th className="text-center">Répeter le</th>
                          <th className="text-center">Véhicule</th>
                          <th className="text-center">Pièce</th>
                          <th className="text-center">Date début</th>
                          <th className="text-center">Date fin</th>
                          <th className="text-center">Statut</th>

                          <th>{""}</th>
                          <th>{""}</th>
                          <th>{""}</th>
                          <th>{""}</th>
                        </tr>
                      </thead>
                    </table>

                    <PlanDeMaintenanceConsumer>
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
}
