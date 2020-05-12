import React, { useEffect, useState } from "react";
import getDataFromHour from "../../services/API/getDataFromHour";
import { connect, useDispatch } from "react-redux";
import { months, filterData } from "../../services/editHoursSev";
import { monthHours } from "../../reducers/actions/index";
import UserHours from "./UserHours";
import { Link } from "react-router-dom";
import "../../style/EditHours.scss";

function EditHours({ userToken, userId, monthData }) {
  const [data, setData] = useState([]);
  const [workThisMonth, setWorkThisMonth] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getDataFromHour(userToken, userId).then((res) => {
      setData(res.data);
    });
  }, []);
  /**
   * @function handleId - target the button id and call filterMonth function
   * @param {*} e
   */

  const handleId = (e) => {
    const id = e.target.id;
    filterMonth(id);
  };

  /**
   * @function filterMonth -  call the helper function and send it to the
   * redux store in case the promise is resolved. After this process it settle
   * the flag to true in case the length of the response is 0
   * @param {number} id
   */
  const filterMonth = (id) => {
    filterData(data, id)
      .then((response) => {
        dispatch(monthHours(response));
      })
      .catch((err) => console.log(err));
    if (monthData.length > 0) setWorkThisMonth(true);
  };

  return (
    <div className="edit_main" data-testid="component-editHours">
      <Link className="back_button" to="/dashboard">
        {" "}
        Back
      </Link>

      <h1 className="edit_header">Edit Hours</h1>

      {months.map((item, index) => (
        <div className="month-edit" key={index}>
          <button id={index + 1} onClick={handleId}>
            {item}
          </button>
        </div>
      ))}

      {monthData.length > 0 ? (
        <UserHours monthData={monthData} />
      ) : workThisMonth ? (
        <p className="no-work">You did not work this month </p>
      ) : (
        <p className="select-month">Select a Month</p>
      )}
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    monthData: state.getMonthData.monthData,
    userToken: state.authorization.token,
    userId: state.authorization.id,
  };
}

export default connect(mapStateToProps)(EditHours);
