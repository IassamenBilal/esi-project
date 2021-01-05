import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../img/logo.svg";
import { PlanDeMaintenanceConsumer } from "./ContextPlanmaintenance";
export default class SideNavBar extends Component {
  render() {
    return (
      <PlanDeMaintenanceConsumer>
        {(value) => {
          return (
            <div className="main-menu">
              <div className="logo">
                <Link to="/home" style={{ textDecoration: "none" }}>
                  <img src={logo} alt="logo" />
                </Link>
              </div>

              <div className="menu-container">
                <div className="menu-items">
                  <NavLink
                    onClick={() => {
                      value.handleCancelFilterNavBar();
                      this.setState({
                        activeStyle: "",
                      });
                    }}
                    className="menu-item"
                    to="/home"
                    exact
                    activeClassName="main-nav-active"
                  >
                    <i className="fa fa-home">
                      <span>Accueil</span>
                    </i>
                  </NavLink>

                  <NavLink
                    onClick={value.handleCancelFilterNavBar}
                    className="menu-item"
                    to="/gestionvehicule"
                    exact
                    activeClassName="main-nav-active"
                  >
                    <i className="fa fa-car">
                      <span>Gestion des véhicules</span>
                    </i>
                  </NavLink>

                  <NavLink
                    onClick={value.handleCancelFilterNavBar}
                    className="menu-item"
                    to="/planmaintenance"
                    exact
                    activeClassName="main-nav-active"
                  >
                    <i className="fa fa-wrench">
                      <span>Les actions de maintenance</span>
                    </i>
                  </NavLink>

                  <NavLink
                    onClick={value.handleCancelFilterNavBar}
                    className="menu-item"
                    to="/calendar"
                    exact
                    activeClassName="main-nav-active"
                  >
                    <i className="fa fa-calendar">
                      <span>Plan de maintenance</span>
                    </i>
                  </NavLink>

                  {/* <div id="drop" className="item">
                  <NavLink className="btn" to="#drop" className="item-drop-down">
                    <i className="fa fa-calendar">
                      <span>Comportement de conduite</span>
                    </i>
                  </NavLink>
                  <div className="smenu">
                    <NavLink to="/planmaintenance" exact>
                      <i className="fa fa-calendar">
                        <span>Score des conducteurs</span>
                      </i>
                    </NavLink>
    
                    <NavLink to="/calendrier" exact>
                      <i className="fa fa-calendar">
                        <span>Configuration</span>
                      </i>
                    </NavLink>
                  </div>
                </div> */}
                  <div className={`menu-item ${this.props.active} `}>
                    <i className="fa fa-user">
                      <span>Comportement de conduite</span>
                    </i>

                    <div className={`sub-menu ${this.props.smenu}`} id="sub">
                      <NavLink
                        onClick={() => {
                          value.handleCancelFilterNavBar();
                        }}
                        to="/comportementconducteur"
                        className="sub-menu-item"
                        activeClassName="main-nav-active"
                      >
                        <i className="fa fa-user">
                          <span>Score des conducteurs</span>
                        </i>
                      </NavLink>

                      <NavLink
                        onClick={() => {
                          value.handleCancelFilterNavBar();
                        }}
                        className="sub-menu-item"
                        to="/config"
                        exact
                        activeClassName="main-nav-active"
                      >
                        <i className="fa fa-cog">
                          <span>Configuration</span>
                        </i>
                      </NavLink>
                    </div>
                  </div>

                  <NavLink
                    onClick={value.handleCancelFilterNavBar}
                    className="menu-item"
                    to="/dashboard"
                    exact
                    activeClassName="main-nav-active"
                  >
                    <i className="fa fa-wrench">
                      <span>Tableau de bord</span>
                    </i>
                  </NavLink>

                  <NavLink
                    onClick={() => {
                      value.handleCancelFilterNavBar();
                      value.handleDisplayProfile();
                    }}
                    className="menu-item"
                    to="/parametres"
                    exact
                    activeClassName="main-nav-active"
                  >
                    <i className="fa fa-cog">
                      <span>Paramètres</span>
                    </i>
                  </NavLink>

                  <NavLink
                    onClick={value.handleCancelFilterNavBar}
                    className="menu-item"
                    to="/about"
                    exact
                    activeClassName="main-nav-active"
                  >
                    <i className="fa fa-question">
                      <span>Aide</span>
                    </i>
                  </NavLink>
                </div>
              </div>
            </div>
          );
        }}
      </PlanDeMaintenanceConsumer>
    );
  }
}
