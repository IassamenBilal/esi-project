import React from "react";
// import { Link } from "react-router-dom";
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
        const connect = value.isLogged ? "/home" : "/";
        console.log(connect);

        return (
          <Grid container component="main" className={classes.root}>
            <CssBaseline />
            {value.alert.show && <AlertSub />}
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
                  Se connecter
                </Typography>
                <form
                  className={classes.form}
                  noValidate
                  onSubmit={(e) => e.preventDefault()}
                >
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    autoComplete="email"
                    label="Adresse email"
                    name="email"
                    onChange={value.handleChange}
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Mot de passe"
                    onChange={value.handleChange}
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Link href={connect}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      onClick={value.handleLogIn}
                    >
                      Se connecter
                    </Button>
                  </Link>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Mot de passe oublié ?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="/sub" variant="body2">
                        {"Vous n'avez pas de compte? Inscrivez vous "}
                      </Link>
                    </Grid>
                  </Grid>
                  <Box mt={5}>
                    <Copyright />
                  </Box>
                </form>
              </div>
            </Grid>
          </Grid>
        );
      }}
    </PlanDeMaintenanceConsumer>
  );
}
