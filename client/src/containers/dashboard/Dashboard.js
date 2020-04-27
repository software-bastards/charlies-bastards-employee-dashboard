import React from "react";
import { Link } from "react-router-dom";
import { createSession } from "../../reducers/actions/index";
import { useDispatch } from "react-redux";


function Dashboard() {
const dispatch = useDispatch()

  const logout = ()=>{
    dispatch(
     createSession(
   0,
    '',
    '',
    '',
    ''
  ))
  }
 
  return(
    <div data-test="component-dash">
      <button onClick={logout}>Log Out</button>
    <Link to='/display-images'> Display Images</Link>   
     <Link to='/myhours'> Edit Hours</Link>
     <Link to='/upload'> Upload</Link>
    </div>
  )
}


export default Dashboard