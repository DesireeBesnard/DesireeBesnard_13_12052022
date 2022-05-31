import axios from 'axios'
import authHeader from '../auth/authHeader'

const API_URL = "http://localhost:3001/api/v1/user"

const getProfile = async() => {

    const response = axios({
        method: 'post',
        url: API_URL + "/profile",
        headers: authHeader()
    })

    return await response

}

const userService = {
    getProfile
}

export default userService