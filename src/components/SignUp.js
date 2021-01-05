import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import background from "../img/bg-02.svg";
import logo from "../img/logo.svg";
import logo2 from "../img/LGPA.svg";
import { blue } from "@material-ui/core/colors";
import { PlanDeMaintenanceConsumer } from "./ContextPlanmaintenance";
import AlertSub from "./AlertSub";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit">LGPA</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",

    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#333347",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <PlanDeMaintenanceConsumer>
      {(value) => {
        return (
          <Grid container component="main" className={classes.root}>
            {value.alert.show && <AlertSub />}
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image}>
              <img
                src={logo}
                style={{
                  width: "35%",
                  height: "35%",
                  margin: "25% 30%",
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
            >
              <div className={classes.paper}>
                <img src={logo2} style={{ marginBottom: "10px" }} />
                <Typography component="h1" variant="h5">
                  S'inscrire
                </Typography>
                <form
                  className={classes.form}
                  noValidate
                  onSubmit={(e) => e.preventDefault()}
                >
                  <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="fname"
                          name="firstname"
                          variant="outlined"
                          required
                          fullWidth
                          id="firstName"
                          label="Nom"
                          autoFocus
                          onChange={value.handleChange}
                          value={value.firstname}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="lastName"
                          label="Prénom"
                          name="lastname"
                          autoComplete="lname"
                          onChange={value.handleChange}
                          value={value.lastname}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="email"
                          label="Email "
                          name="email"
                          autoComplete="email"
                          onChange={value.handleChange}
                          value={value.email}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="password"
                          label="Mot de passe"
                          type="password"
                          id="password"
                          autoComplete="current-password"
                          onChange={value.handleChange}
                          value={value.password}
                        />
                      </Grid>
                    </Grid>

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      onClick={value.handleSubscribe}
                    >
                      S'inscrire
                    </Button>

                    <Grid container justify="flex-end">
                      <Grid item>
                        <Link href="/" variant="body2">
                          Avez-vous déja un compte? Conntectez-vous
                        </Link>
                      </Grid>
                    </Grid>
                  </form>
                </form>
              </div>
            </Grid>
          </Grid>
        );
      }}
    </PlanDeMaintenanceConsumer>
  );
}
