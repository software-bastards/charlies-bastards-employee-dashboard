import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import insertHelper from "../../services/API/insertHelper";
import { useSelector } from "react-redux";
import "../../style/insertHours.scss";
import "../../style/global.scss";

function Insert() {
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
  }

  return (
    <div className="insert-main">
      <div className="insert-form">
        <h5
          onClick={() => {
            setFlagSnack(!flagSnack);
          }}
          className={flagSnack ? "snackbar" : "snackclose"}
        >
          {message}
        </h5>
        <div className="insert-hours-title">
          <h1>INSERT HOURS</h1>
        </div>
        <form
          className="insert-form"
          onSubmit={handleSubmit(onSubmit)}
          data-testid="insert-form-component"
        >
          <label>Hour</label>
          <input
            type="number"
            ref={register}
            name="hour"
            className="insert-hour"
            data-testid="insert-hour"
          />

          <label> Month</label>
          <input
            type="number"
            ref={register}
            name="month_number"
            className="insert-month_number"
            data-testid="insert-month_number"
          />

          <label>Day</label>
          <input
            type="number"
            ref={register}
            name="day_number"
            className="insert-day_number"
            data-testid="insert-day_number"
          />

          <button
            className="insert-button"
            data-testid="insert-button"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default withRouter(Insert);
