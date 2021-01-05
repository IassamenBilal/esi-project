import React from "react";
import { VictoryChart, Bar, VictoryBar } from "victory";
import { PlanDeMaintenanceConsumer } from "./ContextPlanmaintenance";
export default function BarChart() {
  return (
    <PlanDeMaintenanceConsumer>
      {(value) => {
        const data = [
          { x: "En cours", y: value.handleDisplayDashboardPlan()[0] },
          { x: "En arrêt", y: value.handleDisplayDashboardPlan()[1] },
          { x: "En pause", y: value.handleDisplayDashboardPlan()[2] },
          { x: "Términée", y: value.handleDisplayDashboardPlan()[3] },
        ];
        return (
          <div style={{ height: 300, width: 300, marginLeft: "35%" }}>
            <VictoryChart
              height={400}
              width={400}
              domainPadding={{ x: 50, y: [0, 20] }}
              scale={{ x: "" }}
            >
              <VictoryBar dataComponent={<Bar />} data={data} />
            </VictoryChart>
          </div>
        );
      }}
    </PlanDeMaintenanceConsumer>
  );
}
