import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "VISA ⠀•••• 3719",
    312.44
  ),
  createData(
    1,
    "16 Mar, 2019",
    "Paul McCartney",
    "London, UK",
    "VISA ⠀•••• 2574",
    866.99
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Tom Scholz",
    "Boston, MA",
    "MC ⠀•••• 1253",
    100.81
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Michael Jackson",
    "Gary, IN",
    "AMEX ⠀•••• 2000",
    654.39
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    212.79
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>{props.title}</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }} className="text-center">
              {props.tc1}
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} className="text-center">
              {props.tc2}
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} className="text-center">
              {props.tc3}
            </TableCell>
            {props.tc4 !== "" ? (
              <TableCell style={{ fontWeight: "bold" }} className="text-center">
                {props.tc4}
              </TableCell>
            ) : null}
            {props.tc5 !== "" && (
              <TableCell style={{ fontWeight: "bold" }} className="text-center">
                {props.tc5}
              </TableCell>
            )}
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell className="text-center">{props.value1}</TableCell>
            <TableCell className="text-center">{props.value2}</TableCell>
            <TableCell className="text-center">{props.value3}</TableCell>
            {props.value4 !== "" ? (
              <TableCell className="text-center">{props.value4}</TableCell>
            ) : null}
            {props.value5 !== "" && (
              <TableCell className="text-center">{props.value5}</TableCell>
            )}
          </TableRow>
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
