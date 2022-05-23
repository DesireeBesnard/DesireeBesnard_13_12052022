import React, { useState} from "react"
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/auth";
import './style.css'

function SignIn(props) {

  const [email, setUserEmail] = useState("");
  const [password, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    const email = e.target.value
    setUserEmail(email)
  }

  const onChangePassword = (e) => {
    const password = e.target.value
    setUserPassword(password)
  }

  const handleLogin = (e) => {
    let validEmail = false
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    let validPassword = false

    e.preventDefault()
    setLoading(true)

    if (email.trim().match(emailRegex)) {
      validEmail = true
    }

    if (password.trim() !== "") {
      validPassword = true
    }

    if ((validEmail === true ) && (validPassword === true)) {
      dispatch(login(email, password))
        .then(() => {
          props.history.push("/user")
          window.location.reload()
        })
        .catch(() => {
          setLoading(false)
        })
    }
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>

        <form>

          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={onChangeEmail} />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={onChangePassword} />
          </div>

          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          {/* <button
  className="sign-in-button"
  onClick={() => dispatch(login())}>Sign In</button> */}
          <button
            className="sign-in-button"
            onSubmit={handleLogin}>Sign In</button>
        </form>

      </section>
    </main>
  )
}

export default SignIn;
