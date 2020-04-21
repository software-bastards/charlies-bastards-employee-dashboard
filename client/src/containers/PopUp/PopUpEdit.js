import React, {  useState } from "react";
import editHours from "../../services/axios_sev/editHours";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'

function PopUpEdit({ userToken, userId, monthData }) {
  const { register, errors, handleSubmit } = useForm();
  const [message, setMessage] = useState("");

  /**
   * @function updateData - send information to the server to  udate the data from the db
   * @param {*} value  - values that comes from the input
   * @param {*} e -event
   * @returns {obj} - returns a message that says if the request was sucessful or not
   */
  const updateData = (value, e) => {
    e.preventDefault();
    editHours(monthData[0].month_number, value.day, value.hour, userToken, userId)
      .then((res) => setMessage(res.data.message))
      .catch((err) => setMessage(err));
  };

  return (
    <div>
        <form onSubmit={handleSubmit(updateData)}>
        <h2>{message}</h2>
        <label htmlFor="day">Day</label>
        <input type="number" name="day" ref={register({ required: true })} />
        {errors.password && "This field is required"}
        <label htmlFor="hour">Hour</label>
        <input type="number" name="hour" ref={register({ required: true })} />
        {errors.password && "This field is required"}

        <button type="submit"> Submit </button>
      </form>
      <Link to="/myhours">
        <button>Back</button>
      </Link> 
    </div>
  );
}

function mapStateToPropr(state){
  return {
    monthData:state.getMonthData.monthData,
    userToken: state.authorization.token,
    userId: state.authorization.id,
  }
}
export default connect(mapStateToPropr)(PopUpEdit);
