import React from "react";
import { PlanDeMaintenanceConsumer } from "./ContextPlanmaintenance";

import { Link } from "react-router-dom";
export default function TableVehicules(props) {
  const statutType = props.vehicule.etat === "En marche" ? "green" : "red";

  return (
    <React.Fragment>
      <table className="table table-condensed table-hover table-vehicule">
        <tbody>
          <tr>
            <td className="text-center">{props.vehicule.matricule}</td>
            <td className="text-center">{props.vehicule.marque}</td>
            <td className="text-center">{props.vehicule.modele}</td>
            <td className="text-center">{props.vehicule.annee}</td>
            <td className="text-center">{props.vehicule.kilometrage} km</td>

            <td className="text-center">
              <span className={`${statutType}`}>{props.vehicule.etat}</span>
            </td>
            <td>
              <PlanDeMaintenanceConsumer>
                {(value) => {
                  return (
                    <Link to="/editvehicule">
                      <i
                        className="fa fa-edit"
                        style={{
                          fontSize: 20,
                          color: "#333347",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          value.editVehicule(props.vehicule.idVehicule);
                        }}
                      ></i>
                    </Link>
                  );
                }}
              </PlanDeMaintenanceConsumer>
            </td>
            <td>
              <PlanDeMaintenanceConsumer>
                {(value) => {
                  return (
                    <i
                      className="fa fa-times-circle	"
                      style={{ fontSize: 20, color: "red", cursor: "pointer" }}
                      onClick={() => {
                        window.confirm("sure to remove ?") &&
                          value.deleteVehicule(props.vehicule.idVehicule);
                      }}
                    ></i>
                  );
                }}
              </PlanDeMaintenanceConsumer>
            </td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}
