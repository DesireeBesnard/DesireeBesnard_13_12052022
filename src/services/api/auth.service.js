import axios from "axios"

const API_URL = "http://localhost:3001"

const login = (email, password) => {
    return axios
        .post(API_URL + "/user/login", {
            "email": email,
            "password": password
        })
        .then((response) => {
            if(response.token) {
                localStorage.setItem("user", JSON.stringify(response))
            }
            return response
        })
}

const logout = () => {
    localStorage.removeItem("user")
}

module.export = {
    login,
    logout
}