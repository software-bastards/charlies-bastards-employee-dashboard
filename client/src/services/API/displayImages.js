import axios from 'axios'

/**
 * @function displayImages - select the images from the upload table base on the user ID and the selected month
 * @param {*} token -token provide by JWT
 * @param {*} userId - from account table
 * @param {*} month - select by the user
 * @returns {array} - an array of objects
 */





export default  async function displayImages (token,userId,month){
 
    const newLocal = `/upload/images`
    const response = await axios.get(newLocal,  {
        headers: { 'Authorization':  token },
        params: {
            user: userId,
            month:month
          }
       
    } )
     return  response
     }
 