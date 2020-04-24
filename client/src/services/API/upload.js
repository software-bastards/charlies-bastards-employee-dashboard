import axios from 'axios'

export default  async function uploadAPI (formData){
   const newLocal = "/upload"
     const response = await axios.post(newLocal,  formData,
     {headers:{ 'Content-Type': 'multipart/form-data'}}
       )
     return  response 
     }
 
   