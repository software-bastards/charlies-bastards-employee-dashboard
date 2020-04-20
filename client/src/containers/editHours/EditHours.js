import React, { useEffect, useState, useRef } from "react";
import getDataFromHour from "../../services/axios_sev/getDataFromHour";
import PopUp from "../PopUp/PopUp";
import { connect } from "react-redux";
import { getMonthName, months } from "../../services/editHoursSev";
import UserHours from "./UserHours";

function EditHours({ userToken, userId }) {
  const [data, setData] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const [monthData, setMonthData] = useState([]);
  //need to figure out how to call when the component also updates
  useEffect(() => {
    getDataFromHour(userToken, userId).then((res) => {
      setData(res.data);
    });
  }, []);

  /**
   * @function handlerPopUp - open and close the popUp Componnet to edit the hours
   */
  const handlePopUp = () => {
    setPopUp(!popUp);
  };

  const filterMonth = async (e) => {
    const id = await e.target.id;
    const response = await data.filter((e) => {
      return e.month_number === 1;
    });
    setMonthData(response);
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

    {/*   {monthData ? (
        monthData.map((item, i) => {
          const { day_number, hour_logged, month_number } = item;
          return (
            <UserHours
              day_number={day_number}
              hour_logged={hour_logged}
              month_number={month_number}
            />
          );
        })
      ) : (
        <p>data not availble</p>
      )}  */}

      <button onClick={handlePopUp}>Edit</button>
      {popUp ? (
        <PopUp
          handlePopUp={handlePopUp}
          userToken={userToken}
          userId={userId}
        />
      ) : null}
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
