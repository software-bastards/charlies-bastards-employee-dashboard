import axios from 'axios'

/**
 * @function editHours
 * @param {number} id -client id
 * @param {string} token 
 * @returns {obj} - with information from the hour table
 */

export default  async function  (id, token){
    const response = await axios.post("/myhours", {
        email: email,
        password:password
    })

    return  response
}