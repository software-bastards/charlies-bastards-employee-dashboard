import React from "react";
import Login from "./containers/login/Login";
import Dashboard from "./containers/dashboard/Dashboard";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import DisplayHours from "./containers/displayhours/DisplayHours";

function App(isAuthenticated) {
  return (
    <div data-test="component-app">
      <Switch>
        <Route exact path="/">
          {!isAuthenticated ? <Redirect to="/dashboard" /> : <Login />}
        </Route>
        <Route path="/dashboard">
          {!isAuthenticated ? <Redirect to="/" /> : <Dashboard />}
        </Route>
        <Route path="/displayhours">
          {!isAuthenticated ? (
            <Redirect to="/displayhours" />
          ) : (
            <DisplayHours />
          )}
        </Route>
      </Switch>
    </div>
  );
}
function mapToProps(state) {
  return { isAuthenticated: state.authorization.token };
}
export default connect(mapToProps)(App);
