import React,{useState} from "react";
import { useForm } from "react-hook-form";
import loginHelper from "../../services/loginHelper";
import { useDispatch } from "react-redux";
import { createSession } from "../../reducers/actions/index";
import { withRouter} from "react-router-dom";
import { Grid,TextField,FormControl,InputLabel,Input,InputAdornment } from "@material-ui/core";
 import {AccountCircle} from '@material-ui/icons';
 
 import "../../style/login.scss" 

function Login() {
  const [message, setMessage] = useState("");
  const { register, errors, handleSubmit } = useForm();
  const dispatch = useDispatch()
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
    <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
  >
    <main className="main_login">
      <FormControl  data-testid="form-component" onSubmit={handleSubmit(onSubmit)}>
        <p>{message}</p>
        <InputLabel  data-testid="test-label" htmlFor="email">
          E-mail
        </InputLabel >
        <Input
          data-testid="input-form-email"
          type="text"
          name="email"
          color="white"
          ref={register({ required: true })}
           startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          } 
        />
        {errors.email && "This field is required"}

        <InputLabel  data-testid="test-label" htmlFor="password">
          Password
        </InputLabel >
        <Input
        className='input-login'
          data-testid="input-form-password"
          type="password"
          name="password"
          ref={register({ required: true })}
         
        />
        {errors.password && "This field is required"}

        <button  className='button-login' data-testid="submit-button" type="submit">
          {" "}
          Login{" "}
        </button>
      </FormControl >
      <button className='button-login'
        onClick={() => (window.location = "http://localhost:5000/auth/google")}
      >
        {" "}
        Google +
      </button>
    </main>
    </Grid>
  );
}

export default withRouter(Login);
