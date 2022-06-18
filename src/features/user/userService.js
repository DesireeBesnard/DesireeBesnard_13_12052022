import axios from 'axios'
import authHeader from '../auth/authHeader'

const API_URL = "http://localhost:3001/api/v1/user"

const getProfile = async() => {

    const response = await axios({
        method: 'post',
        url: API_URL + "/profile",
        headers: authHeader()
    })

    return response.data

}

const editProfile = async (userData) => {
    const response = await axios.put(`${API_URL}/profile`, {
        "firstName": userData.firstName,
        "lastName": userData.lastName
    }, {
        headers: authHeader()
    })
    return response.data
}

const userService = {
    getProfile,
    editProfile
}
export default userService