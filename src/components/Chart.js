import React, { useContext } from "react";

import { PlanDeMaintenanceConsumer } from "./ContextPlanmaintenance";
import { useTheme } from "@material-ui/core/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";
import Title from "./Title";

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}
// const CreateData = () => {
//   let value = useContext(PlanDeMaintenanceConsumer);
//   return value;
// };
// const cre = CreateData();
// console.log(cre);

const data = [
  createData("00:00", 0),
  createData("03:00", 300),
  createData("scxsd", 12005),
  createData("09:00", 800),
  createData("12:00", 1500),
  createData("15:00", 2000),
  createData("18:00", 2400),
  createData("21:00", 2400),
  createData("24:00", undefined),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Evolution du nombre d'actions de maintenance </Title>
      <PlanDeMaintenanceConsumer>
        {(value) => {
          const data = [
            createData("0", 0),

            createData("05/07/2020", value.plansDeMaintenance.length + 1),
            createData("06/07/2020", value.plansDeMaintenance.length - 1),
            createData("07/07/2020", value.plansDeMaintenance.length),
          ];
          return (
            <ResponsiveContainer>
              <LineChart
                data={data}
                margin={{
                  top: 16,
                  right: 16,
                  bottom: 0,
                  left: 24,
                }}
              >
                <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
                <YAxis stroke={theme.palette.text.secondary}>
                  <Label
                    angle={270}
                    position="left"
                    style={{
                      textAnchor: "middle",
                      fill: theme.palette.text.primary,
                    }}
                  >
                    Nombre d'actions
                  </Label>
                </YAxis>
                <Line
                  type="monotone"
                  dataKey="amount"
                  stroke={theme.palette.primary.main}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          );
        }}
      </PlanDeMaintenanceConsumer>
    </React.Fragment>
  );
}
