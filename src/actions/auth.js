import { login_success, login_fail, onlogout } from "./types"
import authService from "../services/api/auth.service"

export const login = (email, password) => (dispatch) => {
    return authService.login(email, password).then(
        (data) => {
            dispatch({
                type: login_success,
                payload: {user: data}
            })
            return Promise.resolve()
        },
        (error) => {
            dispatch({
                type: login_fail
            })
            console.log("authentification échouée")
            return Promise.reject()
        }
    )
}

export const logout = () => (dispatch) => {
    authService.logout()
    dispatch({
        type: onlogout
    })
}