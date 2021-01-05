import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { mainListItems, secondaryListItems } from "./listItems";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
import SideNavBar from "./SideNavBar";
import TopNavBar from "./TopNavBar";
import { PlanDeMaintenanceConsumer } from "./ContextPlanmaintenance";
import PieActionNiv from "./PieActionNiv";
import BarChart from "./BarChart";
import Pie from "./Pie";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className="content">
      <TopNavBar />
      <SideNavBar />
      <div className="section">
        <h2>Tableau de bord</h2>
        <div className={classes.root}>
          <CssBaseline />

          {/* <Drawer
            variant="permanent"
            classes={{
              paper: clsx(
                classes.drawerPaper,
                !open && classes.drawerPaperClose
              ),
            }}
            open={open}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>{mainListItems}</List>
            <Divider />
            <List>{secondaryListItems}</List>
          </Drawer> */}
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
              <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                  <Paper className={fixedHeightPaper}>
                    <Chart />
                  </Paper>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                  <Paper className={fixedHeightPaper}>
                    <Deposits />
                  </Paper>
                </Grid>
                {/* Recent Orders */}

                <PlanDeMaintenanceConsumer>
                  {(value) => {
                    return (
                      <React.Fragment>
                        <Grid item xs={12}>
                          <Paper className={classes.paper}>
                            <Orders
                              title={"Statistiques véhicules"}
                              tc1={"Nombre de véhicules ajoutés"}
                              tc2={"Nombre de véhicules en marche"}
                              tc3={"Nombre de véhicules en panne"}
                              tc4=""
                              tc5=""
                              value1={value.vehicules.length}
                              value2={`${
                                value.handleDisplayDashboardVehicule()[0]
                              }
                                 (${Math.round(
                                   (parseFloat(
                                     value.handleDisplayDashboardVehicule()[0]
                                   ) *
                                     100) /
                                     parseFloat(value.vehicules.length)
                                 )}%)`}
                              value3={`${
                                value.handleDisplayDashboardVehicule()[1]
                              }
                                   (${Math.round(
                                     (parseFloat(
                                       value.handleDisplayDashboardVehicule()[1]
                                     ) *
                                       100) /
                                       parseFloat(value.vehicules.length)
                                   )}%)`}
                              value4={""}
                              value5={""}
                            />
                            <Pie />
                          </Paper>
                        </Grid>

                        <Grid item xs={12}>
                          <Paper className={classes.paper}>
                            <Orders
                              title={
                                "Statistiques actions de maintenance par statut"
                              }
                              tc1={"Nombre d'actions de maintenance ajoutées "}
                              tc2={"Actions de maintenance en cours "}
                              tc3={"Actions de maintenance en arrêt"}
                              tc4={"Actions de maintenance términées"}
                              tc5="Actions de maintenance en pause"
                              value1={value.plansDeMaintenance.length}
                              value2={value.handleDisplayDashboardPlan()[0]}
                              value3={value.handleDisplayDashboardPlan()[2]}
                              value4={value.handleDisplayDashboardPlan()[1]}
                              value5={value.handleDisplayDashboardPlan()[3]}
                            />
                            <BarChart />
                          </Paper>
                        </Grid>

                        <Grid item xs={12}>
                          <Paper className={classes.paper}>
                            <Orders
                              title={
                                "Statistiques actions de maintenance par niveau"
                              }
                              tc1={"Actions de niveau 1"}
                              tc2={"Actions de niveau 2"}
                              tc3={"Actions de niveau 3"}
                              tc4={"Actions de niveau 4"}
                              tc5={"Actions de niveau 5"}
                              value1={
                                value.handleDisplayDashboardPlanNiveau()[0]
                              }
                              value2={
                                value.handleDisplayDashboardPlanNiveau()[1]
                              }
                              value3={
                                value.handleDisplayDashboardPlanNiveau()[2]
                              }
                              value4={
                                value.handleDisplayDashboardPlanNiveau()[3]
                              }
                              value5={
                                value.handleDisplayDashboardPlanNiveau()[4]
                              }
                            />
                            <PieActionNiv />
                          </Paper>
                        </Grid>
                      </React.Fragment>
                    );
                  }}
                </PlanDeMaintenanceConsumer>
              </Grid>
            </Container>
          </main>
        </div>
      </div>
    </div>
  );
}
