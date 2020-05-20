import React from "react";
import { getMonthName } from "../../services/editHoursSev";
import { Link } from "react-router-dom";
import "../../style/userhours.scss";

function UserHours({ monthData }) {
  return (
    <div className="edit-main">
      <table className={monthData.length > 0 ? "table-edit" : "hidden-table"}>
        <thead className="table-edit-head">
          <tr>
            <td className="table-cell">Day</td>
            <td className="table-cell">Hour</td>
          </tr>
        </thead>
        {monthData.map((item, index) => (
          <tbody className="table-edit-body" key={index}>
            <tr>
              <td className="table-cell">{item.day_number}</td>
              <td className="table-cell">{item.hour_logged}</td>
            </tr>
          </tbody>
        ))}
      </table>
      <br />
      <Link to="/edit">
        <button className="select-button-hours">Edit</button>
      </Link>
    </div>
  );
}

export default UserHours;
