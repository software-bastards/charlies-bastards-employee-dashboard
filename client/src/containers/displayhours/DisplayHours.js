import React, { useEffect, useState } from "react";
import hoursHelper from "../../services/hoursHelper";
import { connect, useSelector } from "react-redux";
import { createSession } from "../../reducers/actions/index";
import { withRouter, useHistory } from "react-router-dom";
function DisplayHours() {
  const history = useHistory();
  const [data, setData] = useState({});

  const authorization = useSelector((store) => {
    return store.authorization;
  });
  useEffect(() => {
    hoursHelper(authorization.token, authorization.id)
      .then((response) => setData({ data: response }))
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2>Your hours table</h2>
      <table>
        <thead>
          <tr>
            <td>Day</td>
            <td>Hour</td>
          </tr>
        </thead>
        {data.map((item, index) => (
          <tbody key={index}>
            <tr>
              <td>{item.day_number}</td>
              <td>{item.hour}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default DisplayHours;
