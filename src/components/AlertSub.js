import React from "react";
import { PlanDeMaintenanceConsumer } from "./ContextPlanmaintenance";

export default function Alert() {
  return (
    <PlanDeMaintenanceConsumer>
      {(value) => {
        return (
          <div className={`alert2 alert-${value.alert.type}`}>
            {value.alert.text}
          </div>
        );
      }}
    </PlanDeMaintenanceConsumer>
  );
}
