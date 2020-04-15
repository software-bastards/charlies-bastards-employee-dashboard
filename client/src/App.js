import React from 'react';
import Login from "./containers/login/Login"
import Dashboard from "./containers/dashboard/Dashboard"
 import {Route, Switch} from 'react-router-dom'
 import {  withRouter } from "react-router-dom";
import Authentication from "./HOC/IsAuthorized"


 function App (){
 
 return (
    <div data-test = "component-app">
      <Switch>
      <Route exact path ='/' component={Authentication(Login)} /> 
       <Route path="/dashboard" component={Authentication(Dashboard)}/> 
      </Switch>
    
    </div>
  );
}

export default App;
