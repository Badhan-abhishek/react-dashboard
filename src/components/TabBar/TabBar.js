import React from "react";
import {
  AccessTimeOutlined,
  DoneOutline,
  DateRangeOutlined,
  EditOutlined,
} from "@material-ui/icons";

import "./TabBar.css";
import Table from "../Table/Table";

const TabBar = () => {
  return (
    <>
      <div className="tab-container">
        <ul>
          <li>
            <a className="active" href="">
              <AccessTimeOutlined style={{ fontSize: 20 }} />
              Recent
            </a>
          </li>
          <li>
            <a href="">
              <DoneOutline style={{ fontSize: 20 }} />
              Sent
            </a>
          </li>
          <li>
            <a href="">
              <DateRangeOutlined style={{ fontSize: 20 }} />
              Sheduled
            </a>
          </li>
          <li>
            <a href="">
              <EditOutlined style={{ fontSize: 20 }} />
              Draft
            </a>
          </li>
        </ul>
      </div>
      <div className="table-container">
        <Table />
      </div>
    </>
  );
};

export default TabBar;
