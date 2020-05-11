import React, {  useState } from "react";
import editHours from "../../services/API/editHours";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {connect,useDispatch} from 'react-redux'
import {monthHours} from "../../reducers/actions/index"


function PopUpEdit({ userToken, userId, monthData }) {
  const { register, errors, handleSubmit } = useForm();
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  /**
   * @function updateData - send information to the server to  udate the data from the db
   * @param {*} value  - values that comes from the input
   * @param {*} e -event
   * @returns {Promise<void>}
   */
  const updateData = (value, e) => {
    e.preventDefault();
    editHours(monthData[0].month_number, value.day, value.hour, userToken, userId)
      .then((res) =>{ setMessage(res.data.message) 
        dispatch(monthHours([])) 
      })
      .catch((err) =>  setMessage(err.response.data.message));
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
