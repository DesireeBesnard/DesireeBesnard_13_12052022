import { login_success, login_fail, onlogout } from "../actions/types"


const user = JSON.parse(localStorage.getItem("user"))
const initialState = user ? { isLoggedIn: true, user } : {isLoggedIn: false, user: null}


export default function AuthReducer(action, state = initialState) {
    const { type, payload } = action

    switch (type) {
        case login_success:
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user
            }
        case login_fail:
            return {
                ...state,
                isLoggedIn: false,
                user: null
            }
        case onlogout:
            return {
                ...state,
                isLoggedIn: false,
                user: null
            }
        default:
            return state
    }
}