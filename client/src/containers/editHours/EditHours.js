import React, { useEffect, useState } from "react";
import editHours from "../../services/editHours";
import { connect } from "react-redux";

function EditHours({ userToken, userId }) {
  const [data, setData] = useState([]);

  /*  useEffect((prevProps)=>{
   if(prevProps!==userToken)  displayHours() 
     }) */

  const displayHours = () => {
    editHours(userId).then((res) => {
      setData(res.data);
      console.log(data);
    });
  };

  return (
    <div>
      <h1>Edit Hours</h1>
      {/* {data.map((item,index) => {
        <div>
        <h2>{item.mounth_number}</h2>
        <p>{item.hour_logged}</p>
        </div>
      })} */}
      <button onClick={displayHours()}>display</button>
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
