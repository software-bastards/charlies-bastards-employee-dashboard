import React, { useEffect, useState } from "react";
import getDataFromHour from "../../services/API/getDataFromHour";
import { connect, useDispatch } from "react-redux";
import { months,filterData } from "../../services/editHoursSev";
import {monthHours} from "../../reducers/actions/index"
import UserHours from "./UserHours";

function EditHours({ userToken, userId,monthData }) {
  const [data, setData] = useState([]);
  const [workThisMonth, setWorkThisMonth] = useState(false);
  const dispatch = useDispatch();
  //need to figure out how to call when the component also updates
  useEffect(() => {
    getDataFromHour(userToken, userId).then((res) => {
      setData(res.data);
      
    });
  }, []);

const handleId= async(e)=>{
   const id = await e.target.id;
     filterMonth(id)  
 
}

  
   const filterMonth =  (id) => {
      filterData(data,id).then(response=>
     {  dispatch(monthHours(response)) 
       
   }
      ).catch(err =>
        console.log(err)
      )
      if(monthData.length>0) setWorkThisMonth(true)
     
   }; 

  return (
    <div data-testid='component-editHours'>
       <h1>Edit Hours</h1>
     {months.map((item, index) => (
        <div key={index}>
          <button id={index + 1} onClick={handleId}>
            {item}
          </button>
        </div>
      ))}

      {monthData.length >0 ? (
        <UserHours monthData={monthData} />
      ) : workThisMonth ? (
        <p>You did not work this month </p>
      ) : (
        <p>Select a Month</p>
      )} 
  
       
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    monthData:state.getMonthData.monthData,
    userToken: state.authorization.token,
    userId: state.authorization.id,
  };
}

export default connect(mapStateToProps)(EditHours);
