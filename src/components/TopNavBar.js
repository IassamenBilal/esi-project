import React, { Component } from "react";
import imgProfile from "../img/Avatar.jpg";
import { PlanDeMaintenanceConsumer } from "./ContextPlanmaintenance";
export default class TopNavBar extends Component {
  render() {
    return (
      <PlanDeMaintenanceConsumer>
        {(value) => {
          return (
            <div className="profile">
              <form
                className="form-inline"
                onSubmit={(e) => e.preventDefault()}
              >
                <i
                  className="fa fa-search "
                  style={{ color: "#333347" }}
                  aria-hidden="true"
                ></i>
                <input
                  className="form-control form-control-sm ml-3 "
                  type="text"
                  placeholder="Search"
                  value={value.keywords}
                  onChange={(e) => {
                    value.handleFilterNavBar(e);
                  }}
                />
              </form>
              <div className="profile-name mr-4 mt-3">
                <div className="user-info">
                  {value.handleDisplayUser()}
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      window.confirm("Se deconncter ?") && value.handleLogOut();
                    }}
                  >
                    Se deconneter
                  </button>
                </div>
              </div>
            </div>
          );
        }}
      </PlanDeMaintenanceConsumer>
    );
  }
}
