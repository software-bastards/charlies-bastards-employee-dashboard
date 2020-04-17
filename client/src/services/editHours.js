import axios from 'axios'

/**
 * @function editHours
 * @param {number} id -client id
 * @param {string} token 
 * @returns {obj} - with information from the hour table
 */

export default  async function editHours (id){
    const response = await axios.post("/myhours", /* {
        headers: { 'Authorization': "Bearer " + token }
      } */
      {
         id:id
    } )

    return  response
}