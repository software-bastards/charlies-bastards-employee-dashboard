import React from "react";
import { getMonthName } from "../../services/editHoursSev";
import { Link } from "react-router-dom";
import "../../style/userhours.scss";

function UserHours({ monthData }) {
  return (
    <div className="edit-main">
      <table
        data-testid="user-table"
        className={monthData.length > 0 ? "table-edit" : "hidden-table"}
      >
        <thead data-testid="user-table-head" className="table-edit-head">
          <tr>
            <td data-testid="table-cell" className="table-cell">
              Day
            </td>
            <td data-testid="table-cell" className="table-cell">
              Hour
            </td>
          </tr>
        </thead>
        {monthData.map((item, index) => (
          <tbody
            data-testid="user-table-body"
            className="table-edit-body"
            key={index}
          >
            <tr>
              <td data-testid="table-cell" className="table-cell">
                {item.day_number}
              </td>
              <td data-testid="table-cell" className="table-cell">
                {item.hour_logged}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <br />
      <Link to="/edit">
        <button data-testid="user-table-button" className="select-button-hours">
          Edit
        </button>
      </Link>
    </div>
  );
}

export default UserHours;
