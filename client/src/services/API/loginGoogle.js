import axios from 'axios'

/**
 * @function loginGoogleHeper
 *@returns {object} - information from google profile
 */

export default  async function  (){
    const response = await axios.get('/auth/google/callback')

    return  response
}