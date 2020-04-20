import React, { useEffect, useState } from "react";
import getDataFromHour from "../../services/axios_sev/getDataFromHour";
import PopUp from "../PopUp/PopUpEdit";
import { connect, useDispatch } from "react-redux";
import { months } from "../../services/editHoursSev";
import {monthHours} from "../../reducers/actions/index"
import UserHours from "./UserHours";

function EditHours({ userToken, userId }) {
  const [data, setData] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const [monthData, setMonthData] = useState([]);
  const [workThisMonth, setWorkThisMonth] = useState(false);
  const dispatch = useDispatch();
  //need to figure out how to call when the component also updates
  useEffect(() => {
    getDataFromHour(userToken, userId).then((res) => {
      setData(res.data);
    });
  }, []);



  /**
   * @function filterMonth - filter the data that comes from the server
   * @param {*} e
   * @returns -  only the data from the selected month
   */
  const filterMonth = async (event) => {
    //need to get the month by the id
    const id = await event.target.id;
    const response = await data.filter((e) => {
      return 1 === e.month_number;
    });
    setMonthData(response);
    dispatch(monthHours(response));
    if (monthData.length <= 0) setWorkThisMonth(true);
  };

  return (
    <div>
      <h1>Edit Hours</h1>
      {months.map((item, index) => (
        <div key={index}>
          <button id={index + 1} onClick={filterMonth}>
            {item}
          </button>
        </div>
      ))}

      {monthData.length > 0 ? (
        <UserHours
         
          monthData={monthData}
          userToken={userToken}
          userId={userId}
        />
      ) : workThisMonth ? (
        <p>You did not work this month </p>
      ) : (
        <p>Select a Month</p>
      )}

      
    </div>
  );
}

function mapStateToProps(state) {
  return {
    userToken: state.authorization.token,
    userId: state.authorization.id,
  };
}

export default connect(mapStateToProps)(EditHours);
