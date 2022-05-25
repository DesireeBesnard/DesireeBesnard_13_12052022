import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import userService from "../../features/userService/userService"
import './style.css'

function User() {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [isLoading, setLoading] = useState(false)

  //redirect if user not connected
  const { user } = useSelector(
      (state) => state.auth
  )

  useEffect(() => {
    if ( !user ) {
      return <Navigate to ="/" />
    }
    setLoading(true)
    userService.getProfile()
      .then(response => {
        let user = JSON.parse(localStorage.getItem("user"))
        setFirstName(response.data.body.firstName)
        setLastName(response.data.body.lastName)
        user['firstName'] = firstName
        user['lastName'] = response.data.body.lastName
        localStorage.setItem("user", JSON.stringify(user))
      })
    if(lastName !== "") {
      setLoading(false)
    }
  }, [user, firstName, lastName])

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{firstName} {lastName}</h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  )
}

export default User;