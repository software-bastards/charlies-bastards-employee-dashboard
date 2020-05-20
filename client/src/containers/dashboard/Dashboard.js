import React, { useState } from "react";
import { connect } from "react-redux";
import "../../style/dashboard.scss";
import dashboardHelper from "../../services/API/dashboardHelper";
import { useSpring, animated } from "react-spring";
import { useEffect } from "react";

function Dashboard({ authorization, userToken, userId }) {
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
            Worked {hourM.length > 0 ? hourM.reduce((a, b) => a + b) : 0} hours
            last month
          </div>
          <div className="col-sm">
            You worked average{" "}
            {hourM.length > 0
              ? hourM.reduce((a, b) => a + b) / hourM.length
              : 0}
            hours
          </div>
        </div>
      </div>
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
