import React, { useEffect, useState, useRef } from "react";
import editHours from "../../services/axios_sev/editHours";
import { useForm } from "react-hook-form";

function PopUpEdit({ handlePopUp, userToken, userId }) {
  const { register, errors, handleSubmit } = useForm();
  const [message, setMessage] = useState("");

  /**
   * @function updateData - send information to the server to  udate the data from the db
   * @param {*} value  - values that comes from the input
   * @param {*} e -event
   * @returns {obj} - returns a message that says if the request was sucessful or not
   */
  const updateData = (value, e) => {
    console.log(value);
    e.preventDefault();
    editHours(value.month, value.day, value.hour, userToken, userId)
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(updateData)}>
        <h2>{message}</h2>
        <label htmlFor="email">Month</label>
        <input type="number" name="month" ref={register({ required: true })} />
        {errors.email && "This field is required"}

        <label htmlFor="day">Day</label>
        <input type="number" name="day" ref={register({ required: true })} />
        {errors.password && "This field is required"}
        <label htmlFor="hour">Hour</label>
        <input type="number" name="hour" ref={register({ required: true })} />
        {errors.password && "This field is required"}

        <button type="submit"> Submit </button>
      </form>
      <button onClick={handlePopUp}>Close</button>
    </div>
  );
}
export default PopUpEdit;
