import React from "react";
import SideNavBar from "./SideNavBar";
import TopNavBar from "./TopNavBar";
import { PlanDeMaintenanceConsumer } from "./ContextPlanmaintenance";
import { Link } from "react-router-dom";
import Alert from "./Alert";
export default function EditPlanDeMaintenance() {
  return (
    <PlanDeMaintenanceConsumer>
      {(value) => {
        return (
          <div className="content">
            <TopNavBar />

            <SideNavBar />
            <div className="section1">
              <h2>Modifier une action de maintenance</h2>
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
                        <label htmlFor="niveau">Niveau de maintenance</label>
                      </div>
                      <div>
                        <label htmlFor="statut">Statut</label>
                      </div>
                      <div>
                        <label htmlFor="vehicule">Véhicule</label>
                      </div>
                      <div>
                        <label htmlFor="repeter">Occurence</label>
                      </div>
                      <div>
                        <label htmlFor="">Répeter le</label>
                      </div>
                      <div>
                        <label htmlFor="piece">La pièce</label>
                      </div>
                      <div>
                        <label htmlFor="description">Description</label>
                      </div>
                      <div>
                        <label htmlFor="datedebut">Date Début</label>
                      </div>
                      <div>
                        <label htmlFor="datefin">Date Fin</label>
                      </div>
                    </div>

                    <div className="inputs">
                      <div>
                        <select
                          name="niveauDeMaintenance"
                          className="form-control"
                          onChange={value.handleChange}
                          value={value.niveauDeMaintenance}
                        >
                          <option>{""}</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                      <div>
                        <select
                          name="statut"
                          className="form-control"
                          onChange={value.handleChange}
                          value={value.statut}
                        >
                          <option value="">{""}</option>
                          <option value="En cours">En cours</option>
                          <option value="Arrete">Arrêté</option>
                          <option value="En pause">En pause</option>
                          <option value="Termine">Terminé</option>
                        </select>
                      </div>
                      <div>
                        <select
                          name="vehicule"
                          className="form-control"
                          onChange={value.handleChange}
                          value={value.vehicule}
                          disabled={value.vehicules.length === 0}
                        >
                          <option value="">{""}</option>
                          {value.vehicules.length !== 0 ? (
                            value.vehicules.map((v) => {
                              return (
                                <option
                                  value={`${v.marque} ${v.modele} ${v.matricule}`}
                                >
                                  {`${v.marque} ${v.modele} ${v.matricule}`}
                                </option>
                              );
                            })
                          ) : (
                            <option value={value.vehicule}>
                              {value.vehicule}
                            </option>
                          )}
                        </select>
                      </div>
                      <div className="repeat">
                        <input
                          type="number"
                          name="repeterChaque"
                          min="1"
                          onChange={value.handleChange}
                          className="form-control"
                          value={value.repeterChaque}
                        />
                        <select
                          className="form-control"
                          name="periode"
                          onChange={value.handleChange}
                          value={value.periode}
                        >
                          <option>{""}</option>
                          <option value="semaine">Semaine</option>
                          <option value="mois">Mois</option>
                          <option value="annee">Année</option>
                        </select>
                      </div>
                      <div className="check">
                        <div className="check-box">
                          <input
                            type="checkbox"
                            name="dimanche"
                            id="dimanche"
                            onChange={value.handleChange}
                            checked={value.repeterEn.dimanche}
                          />
                          <label htmlFor="dimanche">Dimanche</label>
                        </div>
                        <div className="check-box">
                          <input
                            type="checkbox"
                            onChange={value.handleChange}
                            name="lundi"
                            id="lundi"
                            checked={value.repeterEn.lundi}
                          />
                          <label htmlFor="lundi">Lundi</label>
                        </div>
                        <div className="check-box">
                          <input
                            type="checkbox"
                            name="mardi"
                            id="mardi"
                            onChange={value.handleChange}
                            checked={value.repeterEn.mardi}
                          />
                          <label htmlFor="mardi">Mardi</label>
                        </div>
                        <div className="check-box">
                          <input
                            type="checkbox"
                            onChange={value.handleChange}
                            name="mercredi"
                            id="mercredi"
                            checked={value.repeterEn.mercredi}
                          />
                          <label htmlFor="mercredi">Mercredi</label>
                        </div>
                        <div className="check-box">
                          <input
                            type="checkbox"
                            name="jeudi"
                            id="jeudi"
                            onChange={value.handleChange}
                            checked={value.repeterEn.jeudi}
                          />
                          <label htmlFor="jeudi">Jeudi</label>
                        </div>
                      </div>
                      <div>
                        <input
                          type="text"
                          name="piece"
                          onChange={value.handleChange}
                          className="form-control"
                          value={value.piece}
                        />
                      </div>
                      <div>
                        <textarea
                          name="description"
                          cols="4"
                          rows="2"
                          className="form-control"
                          onChange={value.handleChange}
                          value={value.description}
                        ></textarea>
                      </div>
                      <div>
                        <input
                          type="date"
                          name="datedebut"
                          className="form-control"
                          onChange={value.handleChange}
                          value={value.datedebut}
                        />
                      </div>
                      <div className="datefin">
                        <input
                          type="radio"
                          onChange={value.handleChange}
                          value="date"
                          name="typeDateFin"
                          checked={value.typeDateFin === "date"}
                        />
                        <input
                          type="date"
                          className="form-control"
                          onChange={value.handleChange}
                          name="datefin"
                          disabled={value.typeDateFin === "date" ? false : true}
                          value={value.datefin}
                        />
                      </div>
                      <div className="datefin">
                        <input
                          type="radio"
                          value="occurence"
                          onChange={value.handleChange}
                          name="typeDateFin"
                          checked={value.typeDateFin === "occurence"}
                        />
                        <input
                          type="number"
                          min="1"
                          name="datefin"
                          className="form-control"
                          onChange={value.handleChange}
                          value={value.datefin}
                          disabled={value.typeDateFin === "date" ? true : false}
                        />
                        <p>Occurences</p>
                      </div>
                      <div>
                        <input type="file" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="buttons">
                    <Link to="/planmaintenance">
                      <button
                        className="btn btn-primary"
                        onClick={value.handleCancelPlan}
                      >
                        Annuler
                      </button>
                    </Link>

                    <button
                      className="btn btn-primary  btn-creer"
                      onClick={value.addPlanMaintenance}
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
