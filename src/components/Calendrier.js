import React from "react";
import { Calendar, Badge } from "antd";
import "antd/dist/antd.css";
import SideNavBar from "./SideNavBar";
import TopNavBar from "./TopNavBar";
import { PlanDeMaintenanceConsumer } from "./ContextPlanmaintenance";

export default function Calendrier() {
  return (
    <PlanDeMaintenanceConsumer>
      {(value) => {
        let value1 = value.plansDeMaintenance[0].datedebut.split("-")[2];
        let msg = value.plansDeMaintenance[0].piece;
        function getListData(value) {
          let listData;
          switch (value.date()) {
            case parseInt(value1):
              listData = [{ type: "warning", content: msg }];
              break;
            case 10:
              listData = [
                { type: "success", content: "Changer le filtre camion" },
              ];
              break;
            case 15:
              listData = [
                {
                  type: "success",
                  content: "remplacer la batterie véhicule de transport",
                },
              ];
              break;
            default:
          }
          return listData || [];
        }
        function dateCellRender(value) {
          const listData = getListData(value);
          return (
            <ul className="events">
              {listData.map((item) => (
                <li key={item.content}>
                  <Badge status={item.type} text={item.content} />
                </li>
              ))}
            </ul>
          );
        }
        return (
          <div className="content">
            <TopNavBar />
            <SideNavBar />
            <div className="section">
              <h2>Plan de maintenance</h2>
              <div className="plan-maintenance" style={{ padding: 10 }}>
                <Calendar dateCellRender={dateCellRender} />
              </div>
            </div>
          </div>
        );
      }}
    </PlanDeMaintenanceConsumer>
  );
}
