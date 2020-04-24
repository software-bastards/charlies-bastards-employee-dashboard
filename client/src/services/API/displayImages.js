import axios from 'axios'

export default  async function displayImages (token,userId,month){
 
    const newLocal = "/upload/images"
    const response = await axios.post(newLocal,  {
        headers: { 'Authorization':  token },
        data:{userId:userId, month: month}
       
    } )
     return  response
     }
 