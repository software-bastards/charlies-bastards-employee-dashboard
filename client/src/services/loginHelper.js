import axios from 'axios'

export default  async function loginHelper (email,password){
    const response = await axios.post("/login", {
        email: email,
        password:password
    })

    return  response
}