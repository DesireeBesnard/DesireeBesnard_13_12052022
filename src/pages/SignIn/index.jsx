import React, { useEffect, useState} from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { login, reset } from "../../features/auth/authSlice"
import './style.css'

function SignIn(props) {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const {email, password} = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )


// If user already connected redirect to user dashboard
  useEffect(() => {
    if (isSuccess || user) {
      navigate('/user')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])



  const onChange = e => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = e => {
    e.preventDefault()

    const userData = {
      email: email,
      password: password
    }

    dispatch(login(userData))
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>

        <form onSubmit={onSubmit}>

          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="email" value={email} onChange={onChange}/>
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={onChange}  />
          </div>

          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button
            className="sign-in-button"
            type="submit">Sign In</button>
        </form>

      </section>
    </main>
  )
}

export default SignIn;