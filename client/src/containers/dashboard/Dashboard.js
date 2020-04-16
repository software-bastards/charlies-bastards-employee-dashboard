import React, { useState, useEffect } from "react";
import dashboardHelper from "../../services/dashboardHelper";
import { connect } from "react-redux";

function Dashboard({ token, firstname }) {
  const [user, setUser] = useState("");

  useEffect((prevProps) => {
    console.log(firstname);
  });

  return (
    <div className="dash-container">
      <h1>Welcome {firstname} </h1>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    token: state.authorization.token,
    firstname: state.authorization.firstname,
  };
}

export default connect(mapStateToProps)(Dashboard);
