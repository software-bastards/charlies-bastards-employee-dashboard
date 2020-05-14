import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import insertHelper from "../../services/insertHelper";
import { useSelector } from "react-redux";

function Insert() {
  const history = useHistory();
  const authorization = useSelector((store) => {
    return store.authorization;
  });

  const { register, handleSubmit } = useForm();

  function onSubmit(data, e) {
    e.preventDefault();
    insertHelper(authorization.token, authorization.id, data);
    history.push("/dashboard");
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        data-testid="insert-form-component"
      >
        <label>Hour</label>
        <input
          ref={register}
          name="hour"
          className="insert-hour"
          data-testid="insert-hour"
        />

        <label> Month</label>
        <input
          ref={register}
          name="month_number"
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

        <button
          className="insert-button"
          data-testid="insert-button"
          type="submit"
        >
          Submit hours
        </button>
      </form>
    </div>
  );
}

export default withRouter(Insert);
