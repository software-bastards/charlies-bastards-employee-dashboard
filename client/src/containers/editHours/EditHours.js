import React, {useEffect} from "react";
import editHours from "../../services/editHours"
import { connect } from "react-redux";
function EditHours({userToken,userId}) {
  

  useEffect((prevProps)=>{
   if(prevProps!==userToken)  displayHours() 
     })
     
    const displayHours= ()=>{
  
       editHours(userId).then(
            res=>console.log(res[0])
        ) 
    }

       return(
    <div >
    <h1>Edit Hours</h1>
    <button>display</button> 
    </div>
  )
}

function mapStateToProps(state) {
    return {
      userToken: state.authorization.token,
      userId: state.authorization.id,
    };
  }

export default connect(mapStateToProps)(EditHours)