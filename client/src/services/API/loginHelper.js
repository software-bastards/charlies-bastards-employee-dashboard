import axios from 'axios'

/**
 * @function loginHelper
 * @param {str ing} email a- e-mail t=_hat comes from the form
 * @param {string} password - password that comes from the form
 */

export default  async function loginHelper (email,password){
    const response = await axios.post("/login", {
        email: email,
        password:password
    })

    return  response
}