import React from "react";
import { EditOutlined, DeleteOutline } from "@material-ui/icons";

import "./Table.css";

const Table = () => {
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
        <tr className="table-content">
          <td>Campaign_notification</td>
          <td>
            <span className="status">Draft</span>
          </td>
          <td>0</td>
          <td>0</td>
          <td className="action">
            <EditOutlined />
            <DeleteOutline />
          </td>
        </tr>
        <tr className="table-content">
          <td>Campaign_notification</td>
          <td>
            <span className="status">Draft</span>
          </td>
          <td>0</td>
          <td>0</td>
          <td className="action">
            <EditOutlined />
            <DeleteOutline />
          </td>
        </tr>
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

export default Table;
