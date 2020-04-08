import React from 'react'
import {useForm} from 'react-hook-form'
export default function Login(){
const [message,setMessage] = React.useState("")
 const {register,errors, handleSubmit} = useForm()
  const onSubmit = (data, e) => {
     e.preventDefault()
     const user = {
         email: data.email,
         password:data.password
     }
     fetch("/login", {method:"POST",
     headers:{"Content-Type":"application/json"},
     body: JSON.stringify(user)})
     .then(res => res.json())
    .then( 
         res=>
         res.firstname?setMessage(`${res.firstname}, ${res.message}`): setMessage(`${res.message}`)) 
       .catch(err=>console.log(err))

   
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