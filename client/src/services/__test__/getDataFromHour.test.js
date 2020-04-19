import axios from 'axios'
import editHours from "../editHours"

jest.mock('axios')


describe(" axios call when component mounts", ()=>{
    const data = {token:"test", id:1}
    const message = {message:'everything went fine'}
    const error = 'Something went wrong';

    test(" request successfull, retrieve the response",async ()=>{
      axios.post.mockImplementationOnce(() => Promise.resolve(object));
      await expect(editHours(data.token,data.id)).resolves.toEqual(object);
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith("/myhours",{"data": {"account_id": 1}, "headers": {"Authorization": "Bearer test"}});
    })
  
      test(" request failure, retrieve an error", async () =>{
          axios.post.mockImplementation(() => Promise.reject(new Error(error)));
        await expect(editHours()).rejects.toThrow(error);
       
      }) 
  })