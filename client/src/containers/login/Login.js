import React from 'react'
import {useForm} from 'react-hook-form'
import axios from "axios"
export default function Login(){
const [message,setMessage] = React.useState("")
 const {register,errors, handleSubmit} = useForm()
  const onSubmit = (data, e) => {
     e.preventDefault()
       axios.post("/login", {
        email: data.email,
        password:data.password
    })
      .then(res=>
        {
          console.log(res.data.message)
         /* setMessage(`${res.data.firstname}, ${res.data.message}`) */})
       .catch(err=> console.log(err.stack)
       /*  setMessage(`${err}`) */)
  
  };
    return(
        <div data-test="login-component">
            <h1>{message}</h1>
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