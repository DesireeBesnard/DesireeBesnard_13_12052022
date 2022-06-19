//return access token
export default function authHeader() {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user.token) {
        return { 
            'Content-Type': 'application/json',
            authorization: `Bearer ${user.token}`
        }
    } else {
        return {}
    }
}