import React, { useState } from "react";
import hoursHelper from "../../services/hoursHelper";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "../../stylesheets/displayhours.scss";
import { useSpring, animated } from "react-spring";
import Clock from "../clock/Clock";

function DisplayHours() {
  const history = useHistory();
  const [data, setData] = useState({});

  const props = useSpring({
    config: { duration: 1000 },
    opacity: 1,
    from: { opacity: 0 },
  });

  const authorization = useSelector((store) => {
    return store.authorization;
  });

  const handleClick = (e) => {
    e.preventDefault();
    hoursHelper(authorization.token, authorization.id)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="displayhours-main">
      <Clock />
      <animated.div style={props}>
        <button
          data-testid="test-hours"
          className="btn-dash"
          onClick={handleClick}
        >
          show the table
        </button>
        <animated.div style={props}>
          <table className={data.length > 0 ? "table-hours" : "hidden-table"}>
            <thead className="table-hours-head">
              <tr>
                <td className="table-cell">Month</td>
                <td className="table-cell">Day</td>
                <td className="table-cell">Hour</td>
              </tr>
            </thead>
            {data.length > 0 &&
              data.map((item, index) => (
                <tbody
                  data-testid="test-tav"
                  className="table-hours-body"
                  key={index}
                >
                  <tr>
                    <td className="table-cell">{item.mounth_number}</td>
                    <td className="table-cell">{item.day_number}</td>
                    <td className="table-cell" s>
                      {item.hour}
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>
        </animated.div>
        <button
          data-testid="test-dashboard-router"
          className="btn-logout"
          onClick={() => history.push("/dashboard")}
        >
          Go Back
        </button>
      </animated.div>
    </div>
  );
}

export default DisplayHours;
