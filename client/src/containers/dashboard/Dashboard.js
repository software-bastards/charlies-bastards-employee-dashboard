import React from "react";
import { Link } from "react-router-dom";


function Dashboard() {
 
  return(
    <div data-test="component-dash">
    <Link to='/display/images'> Display Images</Link>   
     <Link to='/myhours'> Edit Hours</Link>
     <Link to='/upload'> Upload</Link>
    </div>
  )
}


export default Dashboard