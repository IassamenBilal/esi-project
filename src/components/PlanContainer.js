import React from "react";
import { PlanDeMaintenanceConsumer } from "./ContextPlanmaintenance";

export default function PlanContainer(props) {
  const {
    niveauDeMaintenance,
    description,
    vehicule,
    piece,
    statut,
    datedebut,
  } = props.plan;

  const statutType = () => {
    if (props.plan.statut === "Arrete") {
      return "border-red";
    } else {
      if (props.plan.statut === "En pause") {
        return "border-yellow";
      } else return "border-green";
    }
  };
  return (
    <div className="info-container">
      <div className={`${statutType()} plan`}>
        <h3>Action de maintenance {props.index + 1}</h3>
        <div className="car-container">
          <div className="text-container">
            <p>
              <i className="fa fa-wrench"></i>Niveau de maintenance :{" "}
              {niveauDeMaintenance}
            </p>
            <p>
              <i className="fa fa-calendar-check-o"></i>
              Date début : {datedebut}
            </p>
            <p>
              <i className="fa fa-life-ring"></i>
              La piece : {piece}
            </p>
            <p>
              <i className="fa fa-car"></i>
              Véhicule : {vehicule}
            </p>
            <p>
              <i className="fa fa-spinner"></i>
              Statut : {statut}
            </p>

            {description !== "" && (
              <p>
                <i className="fa fa-edit"></i>
                Description : {description}
              </p>
            )}
          </div>
          <PlanDeMaintenanceConsumer>
            {(value) => {
              const v = value.vehicules.find(
                (v) => v.matricule === vehicule.split(" ")[2]
              );
              return (
                <div className="img-container">
                  <img src={v != null ? v.img : null} alt="car photo" />
                </div>
              );
            }}
          </PlanDeMaintenanceConsumer>
        </div>
      </div>
    </div>
  );
}
