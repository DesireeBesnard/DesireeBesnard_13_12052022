import axios from "axios"
import authHeader from "../auth-header"
const API_URL = "http://localhost:3001"

const getUserProfil= () => {
    return axios
        .post(API_URL + "/user/profile", {}, {
            headers: authHeader
        })
}

const setUserProfil = (firstName, lastName) => {
    return axios
        .put(API_URL + "/user/profile", {
            "firstName": firstName,
            "lastName": lastName
        })
}