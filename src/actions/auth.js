import { login_success, login_fail, onlogout } from "./types"
import AuthService from "../services/api/auth.service"

export const login = (email, password) => (dispatch) => {
    return AuthService.login(email, password).then(
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
            return Promise.reject()
        }
    )
}

export const logout = () => (dispatch) => {
    AuthService.logout()
    dispatch({
        type: onlogout
    })
}