import React, { useState } from "react";
import hoursHelper from "../../services/API/hoursHelper";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "../../style/displayhours.scss";
import { useSpring, animated } from "react-spring";
import { months } from "../../services/editHoursSev";

function DisplayHours() {
  const history = useHistory();
  const [month, setMonth] = useState();
  const [hourMonth, setHourMonth] = useState([]);
  const [message, setMessage] = useState("");
  const [flagSnack, setFlagSnack] = useState(false);

  const props = useSpring({
    config: { duration: 1000 },
    opacity: 1,
    from: { opacity: 0 },
  });

  const authorization = useSelector((store) => {
    return store.authorization;
  });
  /**
   * @function handleOnChange - target the number of the month selected on the select input and set the month state
   * @param {*} e - event
   *
   */

  /**
   * @function handleFilteredMonth - store image on the database based on account ID and the selected month
   * The server sends back the image data and a message saying if your request was succesful or not
   */
  const handleFilteredMonth = () => {
    hoursHelper(authorization.token, authorization.id, month)
      .then((res) => {
        setHourMonth(res.data);
        setFlagSnack(!flagSnack);
        setMessage(res.data.message);
      })
      .catch((err) => {
        setFlagSnack(!flagSnack);
        setMessage(err.response.data.message);
      });
  };

  const handleOnChange = (e) => {
    setMonth(e.target.value);
  };

  return (
    <div className="displayhours-main">
      <h1
        onClick={() => {
          setFlagSnack(!flagSnack);
        }}
        className={flagSnack ? "snackbar" : "snackclose"}
      >
        {message}
      </h1>

      <animated.div style={props}>
        <section className="select-hours">
          <select
            className="select-hours-selector"
            onChange={handleOnChange}
            name="month"
            id="month"
          >
            <option value={1}>Select a Month</option>
            {months.map((e, index) => (
              <option
                className="select-hours-drop"
                key={index}
                value={index + 1}
              >
                {e}
              </option>
            ))}
          </select>
          <button
            className="select-button-hours"
            data-testid="test-displayimage-router"
            onClick={handleFilteredMonth}
          >
            Select
          </button>
        </section>

        <animated.div style={props}>
          <table
            className={hourMonth.length > 0 ? "table-hours" : "hidden-table"}
          >
            <thead className="table-hours-head">
              <tr>
                <td className="table-cell">Month</td>
                <td className="table-cell">Day</td>
                <td className="table-cell">Hour</td>
              </tr>
            </thead>
            {hourMonth.length > 0 &&
              hourMonth
                .sort((a, b) => a.day - b.day)
                .map((item, index) => (
                  <tbody
                    data-testid="test-tav"
                    className="table-hours-body"
                    key={index}
                  >
                    <tr>
                      <td className="table-cell">{months[item.month - 1]}</td>
                      <td className="table-cell">{item.day}</td>
                      <td className="table-cell">{item.hour}</td>
                    </tr>
                  </tbody>
                ))}
          </table>
        </animated.div>
      </animated.div>
    </div>
  );
}

export default DisplayHours;
