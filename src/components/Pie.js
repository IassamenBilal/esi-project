import React from "react";
import { ResponsivePieCanvas } from "@nivo/pie";
import { PlanDeMaintenanceConsumer } from "./ContextPlanmaintenance";
import Title from "./Title";
export default function Pie() {
  return (
    <PlanDeMaintenanceConsumer>
      {(value) => {
        const data = [
          { id: "1", label: "1" },
          { id: "2", label: "2" },
          {
            id: "Véhicules en marche",
            label: "Véhicules en marche",
            value: value.handleDisplayDashboardVehicule()[0],
            color: "hsl(49, 70%, 50%)",
          },
          { id: "4", label: "4" },
          { id: "5", label: "5" },
          {
            id: "Véhicules en panne",
            label: "Véhicules en panne",
            value: value.handleDisplayDashboardVehicule()[1],
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
              fill={[
                {
                  match: {
                    id: "Véhicules en marche",
                  },
                  id: "dots",
                },
                {
                  match: {
                    id: "Véhicules en panne",
                  },
                  id: "dots",
                },
              ]}
            />
          </div>
        );
      }}
    </PlanDeMaintenanceConsumer>
  );
}
