import React from 'react';
import Login from "./containers/login/Login"
import Dashboard from "./containers/dashboard/Dashboard"
 import {Route, Switch,Redirect} from 'react-router-dom'
import { connect } from "react-redux";

/* import io from 'socket.io-client'
 */import Callback from "./containers/authenticated/Callback"

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
      {isAuthenticated? <Redirect to="/dashboard"/>: <Login/>}
      </Route>
       <Route path="/dashboard"> 
       {!isAuthenticated? <Redirect to="/"/>: <Dashboard/>}
       </Route>
       <Route path="/authenticated"> 
       {isAuthenticated? <Redirect to="/dashboard"/>: <Callback />}
       </Route>
      </Switch>
      
    </div>
  );
}

export default connect(mapToProps)(App);
