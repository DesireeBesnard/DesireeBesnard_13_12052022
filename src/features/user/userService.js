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

const editProfile = async (userData) => {
    const response = axios.put(`${API_URL}/profile`, {
        "firstName": userData.firstName,
        "lastName": userData.lastName
    }, {
        headers: authHeader()
    })
    return await response.data
}

const userService = {
    getProfile,
    editProfile
}
export default userService