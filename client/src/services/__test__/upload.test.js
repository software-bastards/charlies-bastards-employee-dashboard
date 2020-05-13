import React from "react";
import axios from 'axios'
import upload from "../API/upload"


jest.mock('axios')


describe(" axios post uplaod", ()=>{
    const formData = {data:"dummy"}
    const message ={message:' success'}
     const error = 'Something went wrong';

    test(" request successfull, retrieve the response",async ()=>{
      axios.post.mockImplementationOnce(() => Promise.resolve(message));
      await expect(upload(formData.data)).resolves.toEqual(message);
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith("http://localhost:5000/upload",formData.data, {"headers": {"Content-Type": "multipart/form-data"}});
    })
  
      test(" request failure, retrieve an error", async () =>{
          axios.post.mockImplementation(() => Promise.reject(new Error(error)));
        await expect(upload()).rejects.toThrow(error);
       
      }) 
  })