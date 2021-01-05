import React from "react";
import SideNavBar from "./SideNavBar";
import TopNavBar from "./TopNavBar";
export default function Configuration() {
  return (
    <div className="content">
      <TopNavBar />
      <SideNavBar active={"active-nav-link"} smenu={"display"} />
      <div className="section">
        <h2>Analyse du comportement des conducteurs</h2>

        <div className="plan-maintenance">
          <div className="filtre-intervention">
            <h3>Configuration des critères d'analyse</h3>

            <div className="config-container">
              <div className="config-car-driver">
                <div>
                  <label htmlFor="vehicule">Marque</label>
                  <select name="vehicule" id="" className="form-control">
                    <option value=""></option>
                  </select>
                </div>
                <div>
                  <label htmlFor="vehicule">Modèle</label>
                  <select name="vehicule" id="" className="form-control">
                    <option value=""></option>
                  </select>
                </div>
              </div>
              <h4>Les valeurs seuil:</h4>
              <div className="config-details">
                <div>
                  <label htmlFor="">Accéleration</label>
                  <input type="text" name="" id="" className="form-control" />
                </div>
                <div>
                  <label htmlFor="">Freinage</label>
                  <input type="text" name="" id="" className="form-control" />
                </div>
                <div>
                  <label htmlFor="">Vitesse</label>
                  <input type="text" name="" id="" className="form-control" />
                </div>
                <div>
                  <label htmlFor="">Nb accéleration</label>
                  <input type="text" name="" id="" className="form-control" />
                </div>
                <div>
                  <label htmlFor="">Nb freinage</label>
                  <input type="text" name="" id="" className="form-control" />
                </div>
                <div>
                  <label htmlFor="">Durée de conduite</label>
                  <input type="text" name="" id="" className="form-control" />
                </div>
              </div>
              <div className="config-buttons">
                <button className="btn btn-primary">Sauvegarder</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
