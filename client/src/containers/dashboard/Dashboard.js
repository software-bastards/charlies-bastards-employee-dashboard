import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteSession } from "../../reducers/actions/index";
import hoursHelper from "../../services/hoursHelper";
import "./dashboard.scss";

function Dashboard({ token, firstname, lastname }) {
  const [data, setData] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  const authorization = useSelector((store) => {
    return store.authorization;
  });

  const handleClick = (e) => {
    e.preventDefault();
    hoursHelper(authorization.token, authorization.id)
      .then((response) => console.log(response))
      .then(() => history.push("/displayhours"))
      .catch((err) => console.log(err));
  };
  const handleLogOut = (e) => {
    e.preventDefault();
    const message = "";
    const token = "";
    const firstname = "";
    const lastname = "";
    const id = "";
    dispatch(deleteSession(message, token, firstname, lastname, id));
    history.push("/");
  };

  return (
    <div className="dash-container">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            Welcome, {authorization.firstname}{" "}
            <img
              src="https://frontendbastards.nl/images/fe/team/dymion.svg"
              alt="dymion"
              className="avatar"
            />
          </div>
          <div className="col-sm"> Worked hours last month</div>
          <div className="col-sm">I have no idea</div>
        </div>
      </div>

      <button className="btn-dash" onClick={handleClick}>
        Display Your Hours
      </button>

      <button className="btn-dash" onClick={() => history.push("/insert")}>
        Insert New Log
      </button>
      <button className="btn-dash" onClick={() => history.push("/edit")}>
        Edit Your Hours
      </button>
      <button className="btn-dash" onClick={() => history.push("/upload")}>
        Upload Image
      </button>
      <br />
      <button className="btn-logout" onClick={handleLogOut}>
        {" "}
        Log Out
      </button>
    </div>
  );
}

export default Dashboard;
