import React from "react";
import { PlanDeMaintenanceConsumer } from "./ContextPlanmaintenance";

import { Link } from "react-router-dom";

export default function TableauPlanningDeMaintenance(props) {
  const dimanche = props.plan.repeterEn.dimanche ? "Dimanche" : "";
  const lundi = props.plan.repeterEn.lundi ? "Lundi" : "";
  const mardi = props.plan.repeterEn.mardi ? "Mardi" : "";
  const mercredi = props.plan.repeterEn.mercredi ? "Mercredi" : "";
  const jeudi = props.plan.repeterEn.jeudi ? "Jeudi" : "";

  const statutType = () => {
    if (props.plan.statut === "Arrete") {
      return "red";
    } else {
      if (props.plan.statut === "En pause") {
        return "yellow";
      } else return "green";
    }
  };

  return (
    <React.Fragment>
      <table className="table table-condensed table-hover ">
        <tbody>
          <tr>
            <td className="text-center">{props.plan.niveauDeMaintenance}</td>
            <td className="text-center">
              {props.plan.repeterChaque} / {props.plan.periode}
            </td>
            <td className="text-center">
              {dimanche}
              {lundi === "Lundi" ? "/" : ""}
              {lundi}
              {mardi === "Mardi" ? "/" : ""}
              {mardi}
              {mercredi === "Mercredi" ? "/" : ""}
              {mercredi}
              {jeudi === "Jeudi" ? "/" : ""}
              {jeudi}
            </td>
            <td className="text-center">{props.plan.vehicule}</td>
            <td className="text-center">{props.plan.piece}</td>
            <td className="text-center">{props.plan.datedebut}</td>
            <td className="text-center">{props.plan.datefin}</td>

            <td className="text-center">
              <span className={`${statutType()}`}>{props.plan.statut}</span>
            </td>
            <td>
              <PlanDeMaintenanceConsumer>
                {(value) => {
                  return (
                    <Link to="/editplanmaintenance">
                      <i
                        className="fa fa-edit"
                        style={{
                          fontSize: 20,
                          color: "#333347",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          value.editPlanMaintenance(props.plan.id);
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
                          value.deletePlanMaintenance(props.plan.id);
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
