import React from "react";
import "./StatusBar.css";

function StatusBar({ brand }) {
  return (
    <div className="header">
      <div className="heading">{brand}</div>
      <div className="menu">
        <ul>
          <li>
            <a href="">Dashboard</a>
          </li>
          <li>
            <a href="">Campaigns</a>
          </li>
          <li>
            <a href="">Mainling List</a>
          </li>
          <li>
            <a href="">Templates</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default StatusBar;
