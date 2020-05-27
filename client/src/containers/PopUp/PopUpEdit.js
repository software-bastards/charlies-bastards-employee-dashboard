import React, { useState } from "react";
import editHours from "../../services/API/editHours";
import { useForm } from "react-hook-form";

import { connect, useDispatch } from "react-redux";
import { monthHours } from "../../reducers/actions/index";
import "../../style/popupedit.scss";

function PopUpEdit({ userToken, userId, monthData }) {
  const { register, errors, handleSubmit } = useForm();
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const [flagSnack, setFlagSnack] = useState(false);

  /**
   * @function updateData - send information to the server to  udate the data from the db
   * @param {*} value  - values that comes from the input
   * @param {*} e -event
   * @returns {Promise<void>}
   */
  const updateData = (value, e) => {
    e.preventDefault();
    editHours(
      monthData[0].month_number,
      value.day,
      value.hour,
      userToken,
      userId
    )
      .then((res) => {
        setMessage(res.data.message);
        setFlagSnack(!flagSnack);
       
      })
      .catch((err) => {setMessage(err.response.data.message);setFlagSnack(!flagSnack);});
  };

  return (
    <div className="popupedit-main">
      <div className="popupedit-form-container">
        <h1 className="popup-edit-header">EDIT HOURS</h1>
        <form className="popupedit-form" onSubmit={handleSubmit(updateData)}>
        <h1
        onClick={() => {
          setFlagSnack(!flagSnack);
        }}
        className={flagSnack ? "snackbar" : "snackclose"}
      >
        {message}
      </h1>
          <label className="popupedit-label" htmlFor="day">
            Day
          </label>
          <input
            className="popupedit-input"
            type="number"
            name="day"
            ref={register({ required: true })}
          />
          {errors.password && "This field is required"}
          <label className="popupedit-label" htmlFor="hour">
            Hour
          </label>
          <input
            className="popupedit-input"
            type="number"
            name="hour"
            ref={register({ required: true })}
          />
          {errors.password && "This field is required"}

          <button className="select-button-hours" type="submit">
            {" "}
            Submit{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

function mapStateToPropr(state) {
  return {
    monthData: state.getMonthData.monthData,
    userToken: state.authorization.token,
    userId: state.authorization.id,
  };
}
export default connect(mapStateToPropr)(PopUpEdit);
