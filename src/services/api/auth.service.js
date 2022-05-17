import axios from "axios"

const API_URL = "http://localhost:3001"

const login = (email, password) => {
    return axios
        .post(API_URL + "/user/login", {
            "email": email,
            "password": password
        })
        .then((response) => {
            console.log(response)
            if(response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data))
            }
            return response.data
        })
}

const logout = () => {
    localStorage.removeItem("user")
}

const authService = {login, logout}

export default authService