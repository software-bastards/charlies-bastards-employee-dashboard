import React, { useState, useEffect } from "react";
import dashboardHelper from "../../services/dashboardHelper";
import { connect } from "react-redux";
/* import { logoutUser } from "../../reducers/actions/logoutUser"; */
import { useHistory } from "react-router-dom";

function Dashboard({ token, firstname, lastname }) {
  const [user, setUser] = useState("");

  /*   useEffect((prevProps) => {
    console.log(firstname);
  }); */
  /*   const logOut = (e) => {
    e.preventDefault();
    setUser(!isAuthenticated);
  }; */

  const history = useHistory();

  const onLogOut = (e) => {
    localStorage.removeItem("token");
    history.push("/");
    /*       .catch((err) => setMessage(`${err.response.data.message.message}`));
     */
  };
  return (
    <div className="dash-container">
      <h1>
        Welcome {firstname} {lastname}
      </h1>
      <button onClick={() => onLogOut()}> Log Out</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    token: state.authorization.token,
    firstname: state.authorization.firstname,
    lastname: state.authorization.lastname,
    isAuthenticated: state.authorization.token,
  };
}

export default connect(mapStateToProps)(Dashboard);
