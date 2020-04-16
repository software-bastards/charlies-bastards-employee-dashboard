import React, { useState, useEffect } from "react";
import dashboardHelper from "../../services/dashboardHelper";
import { connect } from "react-redux";

function Dashboard({ token, firstname }) {
  const [user, setUser] = useState("");

  /*   componentDidUpdate(prevProps) {
    if (this.props.token !== prevProps.token) {
      this.getAccountData(this.props.token);
    }
  } */

  useEffect((prevProps) => {
    /*  if (token !== prevProps.token) {
      setUser(firstname);
    } */

    console.log(firstname);
  });

  /*  const getHoursData = (props) => {
    dashboardHelper(props)
      .then((res) =>
        
      )
      .catch((err) => console.log(err));
  }; */

  /* render() { */
  return (
    <div className="dash-container">
      <h1>Welcome {user} </h1>
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
