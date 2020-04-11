import React from 'react'
import {useForm} from 'react-hook-form'
import loginHelper from "../../services/loginHelper"
import { connect,useDispatch} from  'react-redux';
import {createSession} from "../../reducers/actions/index"
function Login({messageStore}){
const [message,setMessage] = React.useState("")
 const {register,errors, handleSubmit} = useForm()
  const dispatch = useDispatch()
 /**
  * @function onSumit
  * @param {string} data -Values passed in the input 
  * @param {*} e - event 
  */
 
 const onSubmit = (data, e) => {
     e.preventDefault()
     loginHelper(data.email, data.password)
     .then(res=>
          dispatch(createSession(
              res.data.message,
              res.data.token,
              res.data.firstname,
              res.data.lastname))  
        )
        .then(res=> setMessage(messageStore))
       .catch(err=>  setMessage(`${err.response.data.message.message}`) )

  };
    return(
        <div data-test="login-component">
            <h1 data-test="h1-login-component">{message}</h1>
            <form data-test="form-component" onSubmit={handleSubmit(onSubmit)}>
                <label data-test="label-email" htmlFor="email">E-mail</label>
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

function mapState(state){
    return{
        messageStore:state.authorization.message
    }
}

export default connect(mapState)(Login)