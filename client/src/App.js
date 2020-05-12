import React from "react";
import Login from "./containers/login/Login";
import Dashboard from "./containers/dashboard/Dashboard";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import EditHours from "./containers/editHours/EditHours";
<<<<<<< HEAD
import PopUpEdit from "./containers/PopUp/PopUpEdit"
import Upload from './containers/upload/Upload'
import DisplayImages from './containers/displayImages/DisplayImages'
import Clock from './containers/Clock/Clock'
function mapToProps(state){
  return(
    {isAuthenticated: state.authorization.token,
    message:state.displayMessage.message}
  )
=======
import PopUpEdit from "./containers/PopUp/PopUpEdit";
import Upload from "./containers/upload/Upload";
import DisplayImages from "./containers/displayImages/DisplayImages";
import DisplayHours from "./containers/displayhours/DisplayHours";

function mapToProps(state) {
  return {
    isAuthenticated: state.authorization.token,
    message: state.displayMessage.message,
  };
>>>>>>> dfaffa5c834bcc3f514c92cff10774e6986c76b9
}

function App({ isAuthenticated, message }) {
  return (
    <div className="main-app">
      <Switch>
        <Route exact path="/">
          {isAuthenticated ? <Redirect to="/dashboard" /> : <Login />}
        </Route>
        <Route path="/dashboard">
          {!isAuthenticated ? <Redirect to="/" /> : <Dashboard />}
        </Route>
        <Route path="/myhours">
          {!isAuthenticated ? <Redirect to="/" /> : <EditHours />}
        </Route>
        <Route path="/edit">
          {!isAuthenticated ? <Redirect to="/" /> : <PopUpEdit />}
        </Route>
        <Route path="/upload">
          {!isAuthenticated ? <Redirect to="/" /> : <Upload />}
        </Route>
        <Route path="/display-images">
          {!isAuthenticated ? <Redirect to="/" /> : <DisplayImages />}
        </Route>
        <Route path="/displayhours">
          {!isAuthenticated ? <Redirect to="/" /> : <DisplayHours />}
        </Route>
      </Switch>
    </div>
  );
}

export default connect(mapToProps)(App);
