import axios from 'axios'

/**
 * @function getDataFromHour
 * @param {number} id -client id
 * @param {string} token -token provide by jwt
 * @returns {obj} - with information from the hour table
 */

export default  async function getDataFromHour (token, id){
    const newLocal = "/myhours"
    const response = await axios.post(newLocal,  {
        headers: { 'Authorization':  token },
        data: {account_id:id}
    } )

    return  response
}