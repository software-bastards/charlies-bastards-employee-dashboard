import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteSession } from "../../reducers/actions/index";
import Clock from "../clock/Clock";
import "./dashboard.scss";

import { useSpring, animated } from "react-spring";

function Dashboard() {
  const history = useHistory();
  const dispatch = useDispatch();
  const props = useSpring({
    config: { duration: 2000 },
    opacity: 1,
    from: { opacity: 0 },
  });
  const authorization = useSelector((store) => {
    return store.authorization;
  });

  const handleClick = (e) => {
    e.preventDefault();
    history.push("/displayhours");
  };
  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(deleteSession());
    history.push("/");
  };

  return (
    <animated.div style={props} className="dash-container">
      {/*    <Clock /> */}
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
          <div className="col-sm"> Worked {} hours last month</div>
          <div className="col-sm">I have no idea</div>
        </div>
      </div>

      <button test-id="" className="btn-dash" onClick={handleClick}>
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
    </animated.div>
  );
}

export default Dashboard;
