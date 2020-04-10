import React from "react";
import axios from 'axios'
import loginHelper from "../../services/loginHelper"
import { Provider } from 'react-redux';

jest.mock('axios')


describe(" axios call in the component login", ()=>{
    const data ={email: "ligia@gmail", password:"ligia"}
    const error = 'Something went wrong';

    test(" request successfull, retrieve the response",async ()=>{
      axios.post.mockImplementationOnce(() => Promise.resolve(data));
      await expect(loginHelper("ligia@gmail", "ligia")).resolves.toEqual(data);
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith("/login", (data));})
  
      test(" request failure, retrieve an error", async () =>{
          axios.post.mockImplementation(() => Promise.reject(new Error(error)));
        await expect(loginHelper()).rejects.toThrow(error);
       
      }) 
  })