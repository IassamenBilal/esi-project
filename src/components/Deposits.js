import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import { PlanDeMaintenanceConsumer } from "./ContextPlanmaintenance";
function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;
  return (
    <PlanDeMaintenanceConsumer>
      {(value) => {
        return (
          <React.Fragment>
            <Title>Action de maintenance ajoutées</Title>
            <Typography component="p" variant="h4">
              {value.plansDeMaintenance.length} Action(s)
            </Typography>
            <Typography
              color="textSecondary"
              className={classes.depositContext}
            >
              {today}
            </Typography>
          </React.Fragment>
        );
      }}
    </PlanDeMaintenanceConsumer>
  );
}
