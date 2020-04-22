import React from "react";

import hoursHelper from "../../services/hoursHelper";
import { connect, useDispatch } from "react-redux";
import { createSession } from "../../reducers/actions/index";
import { withRouter, useHistory } from "react-router-dom";

function Insert() {
  const [message, setMessage] = React.useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (value, e) => {
    e.preventDefault();
    hoursHelper(value.hour, value.day_number).then(history.push("/hours"));
  };

  return <main></main>;
}

export default withRouter(Insert);
