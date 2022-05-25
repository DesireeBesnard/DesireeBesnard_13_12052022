import axios from 'axios'

const API_URL = "http://localhost:3001/api/v1/user"

const login = async (userData) => {
    const response = await axios.post(API_URL+"/login", {
        "email": userData.email,
        "password": userData.password
    })

    if(response.data) {
        localStorage.setItem("user", JSON.stringify(response.data.body))
    }

    return response.data
}

const getProfile = async() => {
    const response = await axios.post(API_URL+"profile")
}

const logout = () => {
    localStorage.removeItem("user")
}

const authService = {
    login,
    logout
}

export default authService