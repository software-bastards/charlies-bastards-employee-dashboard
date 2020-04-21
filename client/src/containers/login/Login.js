import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import loginHelper from "../../services/API/loginHelper";
import { useDispatch } from "react-redux";
import { createSession } from "../../reducers/actions/index";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typograpy,
  Grid,
  Paper,
  Snackbar ,
  Button,
  TextField,
  InputLabel,
  Input,
  InputAdornment,
  
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import locker from "../../icons/locker.svg";
import "../../style/login.scss";

const useStyles = makeStyles({
  inputLogin: {
    fontStyle: "Frank Ruhl Libre",
    color: "rgb(231, 230, 230)",
    marginTop: "2%",
  },
  button: {
    fontStyle: "Frank Ruhl Libre",
    color: "rgb(231, 230, 230)",
    marginLeft: "4%",
    marginTop: "10%",
  },
});

function Login() {
  const [message, setMessage] = useState("");
  const { register, errors, handleSubmit, control } = useForm();
  const classes = useStyles();
  const dispatch = useDispatch();

  /**
   * @function onSuhmit
   * @param {string} data -Values passed in the input
   * @param {*} e - event
   */

  const onSubmit = (value, e) => {
    e.preventDefault();
    loginHelper(value.email, value.password)
      .then((res) =>
        dispatch(
          createSession(
            res.data.id,
            res.data.message,
            res.data.token,
            res.data.firstname,
            res.data.lastname
          )
        )
      )
      .catch((err) => setMessage(`${err.response.data.message.message}`));
  };

  return (
    <Grid container className="main_login" justify="center" alignItems="center">
      <Grid
        container
        item
        xs={8}
        justify="center"
        direction="column"
        alignItems="center"
        style={{ height: "70%" }}
      >
        <img src={locker} alt="secure" className="icon-login" />
        <form data-testid="form-component" onSubmit={handleSubmit(onSubmit)}>
          <InputLabel htmlFor="email" className={classes.inputLogin}>
            {" "}
            E-mail
          </InputLabel>
          <Controller
            data-testid="input-form-email"
            as={Input}
            name="email"
            control={control}
            defaultValue=""
            className={classes.inputLogin}
            color="primary"
            required
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
          
          <InputLabel htmlFor="Password" className={classes.inputLogin}>
            {" "}
            Password
          </InputLabel>
          <Controller
            data-testid="input-form-email"
            as={TextField}
            type="password"
            name="password"
            control={control}
            defaultValue=""
            required
            className={classes.inputLogin}
            color="primary"
          />

          <Grid item xs={12}>
            <Button
              color="primary"
              className={classes.button}
              variant="outlined"
              data-testid="submit-button"
              type="submit"
            >
              {" "}
              Login{" "}
            </Button>

            <Button
              color="primary"
              variant="outlined"
              className={classes.button}
              onClick={() =>
                (window.location = "http://localhost:5000/auth/google")
              }
            >
              {" "}
              Google +
            </Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}

export default withRouter(Login);
