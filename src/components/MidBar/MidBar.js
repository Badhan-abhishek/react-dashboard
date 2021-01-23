import React from "react";
import "./MidBar.css";

const MidBar = () => {
  return (
    <div className="mid-container">
      <div className="left">Campaigns</div>
      <div className="right">
        <input type="text" className="input-box" placeholder="Search..." />
        <a href="" className="btn">
          Create Campaign
        </a>
      </div>
    </div>
  );
};

export default MidBar;
