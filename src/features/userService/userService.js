import axios from 'axios'
import authHeader from '../auth/authHeader'

const API_URL = "http://localhost:3001/api/v1/user"

const getProfile = async() => {
    //not working
    /*const response = await axios.post(API_URL+"/profile"
    , {
        headers: authHeader()
    })*/

    const response = axios({
        method: 'post',
        url: API_URL + "/profile",
        headers: authHeader()
    })
    /*
        userInf['firstName'] = response.data.body.firstName
        userInf['lastName'] = response.data.body.lastName
        localStorage.setItem("user", JSON.stringify(userInf))
    */

    return await response

}

const userService = {
    getProfile
}

export default userService