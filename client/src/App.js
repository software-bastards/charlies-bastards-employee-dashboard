import React from 'react';
import Login from "./containers/login/Login"
import Dashboard from "./containers/dashboard/Dashboard"
 import {Route, Switch,Redirect} from 'react-router-dom'
import { connect } from "react-redux";
import EditHours from "./containers/editHours/EditHours"
import PopUpEdit from "./containers/PopUp/PopUpEdit"
import Callback from "./containers/authenticated/Callback"

/* import io from 'socket.io-client'
 */


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
       <Route path="/edit"> 
       {!isAuthenticated? <Redirect to="/"/>: <PopUpEdit/>}
       </Route>
           
     <Route path="/authenticated"> 
       {isAuthenticated? <Redirect to="/dashboard"/>: <Callback />}
       </Route> 
      </Switch>
      
    </div>
  );
}

export default connect(mapToProps)(App);
