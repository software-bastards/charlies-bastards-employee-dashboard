import React, { useState } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteSession } from "../../reducers/actions/index";
import Clock from "../Clock/Clock";
import "../../style/dashboard.scss";
import dashboardHelper from "../../services/API/dashboardHelper";
import { useSpring, animated } from "react-spring";
import { useEffect } from "react";

function Dashboard({ authorization, userToken, userId }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [hourM, setHourM] = useState([]);
  const [message, setMessage] = useState("");
  const [flagSnack, setFlagSnack] = useState(false);
  const props = useSpring({
    config: { duration: 1000 },
    opacity: 1,
    from: { opacity: 0 },
  });

  useEffect(() => {
    dashboardHelper(userToken, userId)
      .then((res) => {

        let temp = [];
        for (let i = 0; i < res.data.length; i++) {
          temp.push(res.data[i].hour_logged);
        }
        setHourM(temp);

      })
      .catch((err) => {
        setFlagSnack(!flagSnack);
        setMessage(err.response.data.message);
      });
  }, [userToken, userId]);
  console.log(hourM);
  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(deleteSession());
    history.push("/");
  };

  return (
    <animated.div style={props} className="dash-container">
      <h1
        onClick={() => {
          setFlagSnack(!flagSnack);
        }}
        className={flagSnack ? "snackbar" : "snackclose"}
      >
        {message}
      </h1>
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
          <div className="col-sm">
            {" "}
            Worked {hourM.length > 0 ? hourM.reduce((a, b) => a + b) : 0} hours
            last month
          </div>
          <div className="col-sm">
            You worked average{" "}
            {hourM.length > 0
              ? hourM.reduce((a, b) => a + b) / hourM.length
              : 0}{" "}
            hours{" "}
          </div>
        </div>
      </div>
      <div className="dashboard-buttons">
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
          Edit Hours
        </button>
        <button
          data-testid="test-upload-router"
          className="btn-dash"
          onClick={() => history.push("/upload")}
        >
          Upload Image
        </button>
        <button
          data-testid="test-image-router"
          className="btn-dash"
          onClick={() => history.push("/display-images")}
        >
          Display Image
        </button>
      </div>
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

export function mapStateToProps(state) {
  return {
    authorization: state.authorization,
    userToken: state.authorization.token,
    userId: state.authorization.id,
  };
}

export default connect(mapStateToProps)(Dashboard);
