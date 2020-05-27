import React, { useEffect, useState } from "react";
import getDataFromHour from "../../services/API/getDataFromHour";
import { connect, useDispatch } from "react-redux";
import { months, filterData } from "../../services/editHoursSev";
import { monthHours } from "../../reducers/actions/index";
import UserHours from "./UserHours";
import "../../style/EditHours.scss";

export function EditHours({ userToken, userId, monthData }) {
  const [data, setData] = useState([]);
  const [workThisMonth, setWorkThisMonth] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getDataFromHour(userToken, userId).then((res) => {
      setData(res.data);
    });
  }, [userToken, userId]);
  /**
   * @function handleId - target the button id and call filterMonth function
   * @param {*} e
   */

  const handleId = (e) => {
    const id = e.target.value;
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
    if (monthData.length > 0) setWorkThisMonth(true);
  };

  return (
    <div className="edit_main" data-testid="component-editHours">
      <h1 data-testid="h1-editHours" className="edit_header">
        Edit Hours
      </h1>
      <section className="select-hours-edit">
        <select
          className="select-hours-selector"
          onChange={handleId}
          name="month"
          id="month"
        >
          <option value={1}>Select a Month</option>
          {months.map((e, index) => (
            <option className="select-hours-drop" key={index} value={index + 1}>
              {e}
            </option>
          ))}
        </select>
      
      </section>

      {monthData.length > 0 ? (
        <UserHours monthData={monthData} />
      ) : workThisMonth ? (
        <p data-testid="noWork-editHours" className="no-work">
          You did not work this month{" "}
        </p>
      ) : (
        ""
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
