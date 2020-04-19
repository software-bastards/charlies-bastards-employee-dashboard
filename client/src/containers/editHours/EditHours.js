import React,  { useEffect, useState, useRef }  from "react";
import getDataFromHour from "../../services/getDataFromHour";
import PopUp from '../PopUp/PopUp'
import {connect} from 'react-redux'
 function EditHours({ userToken, userId }) {
  const [data, setData] = useState([]);
  const [popUp,setPopUp] =useState(false)

//need to figure out how to call when the component also updates
  useEffect(() => {
    getDataFromHour(userToken,userId).then((res) => {
        setData(res.data)})},
        []); 

/**
 * @function handlerPopUp - open and close the popUp Componnet to edit the hours
 */
   const handlePopUp =()=>{
    setPopUp(!popUp)
   }
  
  

  return (
    <div>
      <h1>Edit Hours</h1>
      
      <ul>
    {data.map((e,i)=>
    (  <div key={i}>
      <li> Month {e.mounth_number}</li>
      <li>Day {e.day_number}</li>
      <li> Hours worked{e.hour_logged}</li>
      
      <button onClick={handlePopUp}>Edit</button>
      
      </div>)
    )}
    </ul>
    {popUp?
    <PopUp handlePopUp={handlePopUp} userToken={userToken} userId={userId}/>
    :null}
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
