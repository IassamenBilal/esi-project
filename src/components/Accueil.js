import React, { Component } from "react";
import TopNavBar from "./TopNavBar";
import SideNavBar from "./SideNavBar";

import { PlanDeMaintenanceConsumer } from "./ContextPlanmaintenance";
import PlanContainer from "./PlanContainer";
export default class Accueil extends Component {
  render() {
    return (
      <div className="content">
        <TopNavBar />
        <SideNavBar active={""} />
        <div className="section">
          <h2>Accueil</h2>
          <PlanDeMaintenanceConsumer>
            {(value) => {
              const {
                plansDeMaintenanceFilterNavbar,
                plansDeMaintenance,
              } = value;

              if (plansDeMaintenanceFilterNavbar.length > 0) {
                return plansDeMaintenanceFilterNavbar.map((plan, index) => {
                  return (
                    <PlanContainer plan={plan} key={plan.id} index={index} />
                  );
                });
              } else {
                if (plansDeMaintenance.length > 0) {
                  return plansDeMaintenance.map((plan, index) => {
                    return (
                      <PlanContainer plan={plan} key={plan.id} index={index} />
                    );
                  });
                } else {
                  return;
                }
              }
            }}
          </PlanDeMaintenanceConsumer>
        </div>
      </div>
    );
  }
}
