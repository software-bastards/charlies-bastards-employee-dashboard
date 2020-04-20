import React from "react";
import { getMonthName } from "../../services/editHoursSev";
import { Route, Link, Redirect } from "react-router-dom";
import PopUpEdit from "../PopUp/PopUpEdit";
export default function UserHours({
  monthData,
  handlePopUp,
  popUp,
  userToken,
  userId,
}) {
  return (
    <div>
      <h2>{getMonthName(monthData[0].month_number)}</h2>
      <table>
        <thead>
          <tr>
            <td>Day</td>
            <td>Hour</td>
          </tr>
        </thead>
        {monthData.map((item, index) => (
          <tbody key={index}>
            <tr>
              <td>{item.day_number}</td>
              <td>{item.hour_logged}</td>
            </tr>
          </tbody>
        ))}
      </table>
      <Link to="/edit">
        <button>Edit</button>
      </Link>
    </div>
  );
}
