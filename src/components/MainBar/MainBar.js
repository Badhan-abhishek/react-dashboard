import React from "react";
import { EditOutlined, DeleteOutline } from "@material-ui/icons";
import "./MainBar.css";

const MainBar = ({ data_prop }) => {
  return (
    <div className="table">
      <table cellPadding="0" cellSpacing="0">
        <tr className="table-head">
          <th>Campaign</th>
          <th>Status</th>
          <th>Opens</th>
          <th>Clicks</th>
          <th>Actions</th>
        </tr>
        {data_prop.map((notification, index) => (
          <tr key={index} className="table-content">
            <td>{notification.data.campaignName}</td>
            <td>
              <span className="status">{notification.data.status}</span>
            </td>
            <td>{notification.data.opens}</td>
            <td>{notification.data.clicks}</td>
            <td className="action">
              <EditOutlined />
              <DeleteOutline />
            </td>
          </tr>
        ))}
        <tr>
          <td></td>
          <td className="bottom-menu">
            <a className="action" href="">
              {" "}
              &lt;={" "}
            </a>
            <a className="btn-small active-button" href="">
              1
            </a>
            <a href="btn-small">2</a>
            <a className="action" href="">
              {" "}
              =&gt;{" "}
            </a>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
};

export default MainBar;
