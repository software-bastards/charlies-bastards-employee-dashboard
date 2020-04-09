import React from 'react'
import {useForm} from 'react-hook-form'
import loginHelper from "../../services/loginHelper"
import { connect,useDispatch} from  'react-redux';

export default function Login(){
const [message,setMessage] = React.useState("")
 const {register,errors, handleSubmit} = useForm()
  const dispatch= useDispatch()
 /**
  * @function onSumit
  * @param {string} data -Values passed in the input 
  * @param {*} e - event 
  */
 
 const onSubmit = (data, e) => {
     e.preventDefault()
     loginHelper(data.email, data.password)
     .then(res=>
          dispatch({ 
            type : "CREATE_SESSION",
            message:res.data.message,
            token : res.data.token,
            firstname:res.data.firstname,
            lastname:res.data.lastname
        })  
        )
       .catch(err=>  setMessage(`${err.response.data.message.message}`) )

  };
    return(
        <div data-test="login-component">
            <h1 data-test="h1-login-component">{message}</h1>
            <form data-test="form-component" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">E-mail</label>
                <input
                data-test="input-form"
                 type="text"
                  name='email'
                  ref={register({required:true})}/>
                  {errors.email && "This field is required"}
                <label htmlFor="password">Password</label>
                 <input 
                 data-test="input-form"
                 type="password"
                  name='password'
                  ref={register({required:true})}/>
                  {errors.password && "This field is required"}
                 <button  data-test="submit-button" type="submit"> Login  </button>
            </form>

        </div>
    )

}