import React from "react";
import { ResponsivePieCanvas } from "@nivo/pie";
import { PlanDeMaintenanceConsumer } from "./ContextPlanmaintenance";
import Title from "./Title";
export default function PieActionNiv() {
  return (
    <PlanDeMaintenanceConsumer>
      {(value) => {
        const data = [
          {
            id: "Actions de niveau 1",
            label: "Actions de niveau 1",
            value: value.handleDisplayDashboardPlanNiveau()[0],
            color: "hsl(49, 70%, 50%)",
          },
          {
            id: "Actions de niveau 2",
            label: "Actions de niveau 2",
            value: value.handleDisplayDashboardPlanNiveau()[1],
            color: "hsl(49, 70%, 50%)",
          },
          {
            id: "Actions de niveau 3",
            label: "Actions de niveau 3",
            value: value.handleDisplayDashboardPlanNiveau()[2],
            color: "hsl(49, 70%, 50%)",
          },
          {
            id: "Actions de niveau 4",
            label: "Actions de niveau 4",
            value: value.handleDisplayDashboardPlanNiveau()[3],
            color: "hsl(49, 70%, 50%)",
          },
          {
            id: "Actions de niveau 5",
            label: "Actions de niveau 5",
            value: value.handleDisplayDashboardPlanNiveau()[4],
            color: "hsl(49, 70%, 50%)",
          },
        ];

        return (
          <div style={{ height: 300 }}>
            <ResponsivePieCanvas
              data={data}
              margin={{ top: 40, right: 200, bottom: 40, left: 80 }}
              pixelRatio={1}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              colors={{ scheme: "paired" }}
              borderColor={{ from: "color", modifiers: [["darker", 0.6]] }}
              radialLabelsSkipAngle={10}
              radialLabelsTextXOffset={6}
              radialLabelsTextColor="#333333"
              radialLabelsLinkOffset={0}
              radialLabelsLinkDiagonalLength={16}
              radialLabelsLinkHorizontalLength={24}
              radialLabelsLinkStrokeWidth={1}
              radialLabelsLinkColor={{ from: "color" }}
              slicesLabelsSkipAngle={10}
              slicesLabelsTextColor="#333333"
              animate={true}
              motionStiffness={90}
              motionDamping={15}
              defs={[
                {
                  id: "dots",
                  type: "patternDots",
                  background: "inherit",
                  color: "rgba(255, 255, 255, 0.3)",
                  size: 4,
                  padding: 1,
                  stagger: true,
                },
                {
                  id: "lines",
                  type: "patternLines",
                  background: "inherit",
                  color: "rgba(255, 255, 255, 0.3)",
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10,
                },
              ]}
            />
          </div>
        );
      }}
    </PlanDeMaintenanceConsumer>
  );
}
