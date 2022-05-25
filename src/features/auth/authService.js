import axios from 'axios'
import authHeader from './authHeader'

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
    const response = await axios.post(API_URL+"profile", {headers: authHeader() })
    const isUser = localStorage.getItem("user")

    if ((isUser)&&(response.data)) {
        //let user = JSON.parse(isUser)
    }
    return response.data
}

const logout = () => {
    localStorage.removeItem("user")
}

const authService = {
    login,
   // getProfile
    logout
}

export default authService