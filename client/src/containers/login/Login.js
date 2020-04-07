import React, { Component } from 'react'
import {userForm, useForm} from 'react-hook-form'

export default function Login(){

 const {register,handlerSubmit} = useForm()
    return(
        <div data-test="login-component">
            <form data-test="form-component" onSubmit={handlerSubmit(submitform)}>
                <label htmlFor="email">E-mail</label>
                <input type="text" name='email'/>
                <label htmlFor="password">Password</label>
                 <input type="text" name='password'/>
                 <button type="submit"> Login in  </button>
            </form>

        </div>
    )

}