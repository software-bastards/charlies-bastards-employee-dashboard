import React from 'react';
import Login from "./containers/login/Login"
import Dashboard from "./containers/dashboard/Dashboard"
 import {Route, Switch,Redirect} from 'react-router-dom'
import { connect } from "react-redux";
import EditHours from "./containers/editHours/EditHours"
/* import io from 'socket.io-client'
 */
import Callback from "./containers/authenticated/Callback"

function mapToProps(state){
  return(
    {isAuthenticated: state.authorization.token}
  )
}

 function App ({isAuthenticated}){
 
 return (
    <div className='main-app'>
   
      <Switch>
      <Route exact path ='/'> 
      {isAuthenticated? <Redirect to="/myhours"/>: <Login/>}
      </Route>
       <Route path="/myhours"> 
       {!isAuthenticated? <Redirect to="/"/>: <EditHours/>}
       </Route>
     {/* Google authentication  
     
     <Route path="/authenticated"> 
       {isAuthenticated? <Redirect to="/dashboard"/>: <Callback />}
       </Route> */}
      </Switch>
      
    </div>
  );
}

export default connect(mapToProps)(App);
