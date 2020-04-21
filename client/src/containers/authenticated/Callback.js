import React,{useEffect} from "react";
import {createSession} from "../../reducers/actions/index"
import loginGoogleProfile from "../../services/loginGoogle"
import { useDispatch } from "react-redux";
function Authenticate() {
 const dispatch = useDispatch()
useEffect(()=>{
  getGoogleData()})

  const getGoogleData =(e)=>{
    loginGoogleProfile()
    .then((res) => console.log(res)
      /*   dispatch(
          createSession(
            res.data.message,
            res.data.token,
            res.data.firstname,
            res.data.lastname
          )
        ) */
      )
      .catch((err) => console.log(err))
  } 
 
      return(
    <div data-test="component-dash">
    <h1>You are authenticated</h1>
    </div>
  )
}


export default Authenticate