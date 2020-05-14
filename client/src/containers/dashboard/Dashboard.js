import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteSession } from "../../reducers/actions/index";
import Clock from "../Clock/Clock";
import "../../style/dashboard.scss";

import { useSpring, animated } from "react-spring";

function Dashboard() {
  const history = useHistory();
  const dispatch = useDispatch();
  const props = useSpring({
    config: { duration: 1000 },
    opacity: 1,
    from: { opacity: 0 },
  });
  const authorization = useSelector((store) => {
    return store.authorization;
  });

  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(deleteSession());
    history.push("/");
  };

  return (
    <animated.div style={props} className="dash-container">
      <Clock />
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
          <div className="col-sm">Why even </div>
        </div>
      </div>

      <button
        data-testid="test-display-router"
        className="btn-dash"
        onClick={() => history.push("/displayhours")}
      >
        Display Hours
      </button>

      <button
        data-testid="test-insert-router"
        className="btn-dash"
        onClick={() => history.push("/inserthours")}
      >
        Insert New Log
      </button>
      <button
        data-testid="test-edit-router"
        className="btn-dash"
        onClick={() => history.push("/myhours")}
      >
        Edit Your Hours
      </button>
      <button
        data-testid="test-upload-router"
        className="btn-dash"
        onClick={() => history.push("/upload")}
      >
        Upload Image
      </button>
      <br />
      <button
        data-testid="test-logout"
        className="btn-logout"
        onClick={handleLogOut}
      >
        {" "}
        Log Out
      </button>
    </animated.div>
  );
}

export default Dashboard;
