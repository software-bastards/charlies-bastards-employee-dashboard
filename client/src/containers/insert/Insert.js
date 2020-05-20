import React, { useState } from "react";
import { withRouter, useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import insertHelper from "../../services/insertHelper";
import { useSelector } from "react-redux";
import "../../style/insertHours.scss";
import "../../style/global.scss";
import Clock from "./Clock/Clock";

function Insert() {
  const history = useHistory();
  const authorization = useSelector((store) => {
    return store.authorization;
  });

  const { register, handleSubmit } = useForm();
  const [message, setMessage] = useState("");
  const [flagSnack, setFlagSnack] = useState(false);

  function onSubmit(data, e) {
    e.preventDefault();
    insertHelper(authorization.token, authorization.id, data)
      .then((res) => {
        setFlagSnack(!flagSnack);
        setMessage(res.data.message);
      })
      .catch((err) => {
        setFlagSnack(!flagSnack);
        setMessage(err.response.data.message);
      });
    //history.push("/dashboard");
  }

  return (
    <div className="insert_main">
      {/* <div className="insert-clock">
        <Clock />
      </div> */}

      <h1
        onClick={() => {
          setFlagSnack(!flagSnack);
        }}
        className={flagSnack ? "snackbar" : "snackclose"}
      >
        {message}
      </h1>

      <div className="insert-form">
        <h1 className="edit_header">INSERT HOURS</h1>

        <form
          className="select-hours-insert"
          onSubmit={handleSubmit(onSubmit)}
          data-testid="insert-form-component"
        >
          <label> Month</label>
          <input
            ref={register}
            name="mounth_number"
            className="insert-month_number"
            data-testid="insert-month_number"
          />

          <label>Day</label>
          <input
            ref={register}
            name="day_number"
            className="insert-day_number"
            data-testid="insert-day_number"
          />

          <label>Hour</label>
          <input
            ref={register}
            name="hour"
            className="insert-hour"
            data-testid="insert-hour"
          />

          <button
            className="insert-button"
            data-testid="insert-button"
            type="submit"
            //  onClick={() => (window.location = "/dashboard")}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default withRouter(Insert);
