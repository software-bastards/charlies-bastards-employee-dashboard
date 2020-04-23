import React, { useState } from "react";
import dashboardHelper from "../../services/dashboardHelper";
import hoursHelper from "../../services/hoursHelper";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Dashboard({ token, firstname, lastname }) {
  const [user, setUser] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  const authorization = useSelector((store) => {
    return store.authorization;
  });

  const handleClick = () => {
    hoursHelper(authorization.token, authorization.id)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(localStorage.removeItem(authorization.token));
    history.push("/");
  };

  return (
    <div className="dash-container">
      <h1>
        Welcome {authorization.firstname} {authorization.lastname}
      </h1>
      <button onClick={handleClick}> Display Your Hours</button>
      <button onClick={handleLogOut}> Log Out</button>
    </div>
  );
}

export default Dashboard;
