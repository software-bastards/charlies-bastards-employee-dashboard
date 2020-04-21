import React, { useState, useEffect } from "react";
import dashboardHelper from "../../services/dashboardHelper";
import hoursHelper from "../../services/hoursHelper";
import { connect, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Dashboard({ token, firstname, lastname }) {
  const [user, setUser] = useState("");
  const history = useHistory();
  const authorization = useSelector((store) => {
    return store.authorization;
  });
  /**
  

  /*   const hoursDisplay = (value) => {
    hoursHelper(value).then((res) => console.log(res));
  }; */
  const handleClick = () => {
    hoursHelper(authorization.token, authorization.id)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };
  /*   useEffect((prevProps) => {
    console.log(firstname);
  }); */
  /*   const logOut = (e) => {
    e.preventDefault();
    setUser(!isAuthenticated);
  }; */

  /*   const onLogOut = (e) => {
    localStorage.removeItem("token");
    history.push("/");
    /*       .catch((err) => setMessage(`${err.response.data.message.message}`));
     */

  return (
    <div className="dash-container">
      <h1>
        Welcome {authorization.firstname} {authorization.lastname}
      </h1>
      <button onClick={handleClick}> Hours</button>
    </div>
  );
}

export default Dashboard;
