import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import userService from "../../features/userService/userService"
import './style.css'

function User() {

  const navigate = useNavigate()

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  //redirect if user not connected
  const { user } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (!user) {
      navigate("/")
      return
    }

    userService.getProfile()
      .then(response => {
        let user = JSON.parse(localStorage.getItem("user"))
        setFirstName(response.data.body.firstName)
        setLastName(response.data.body.lastName)
        user['firstName'] = firstName
        user['lastName'] = response.data.body.lastName
        localStorage.setItem("user", JSON.stringify(user))
      })
  }, [navigate, user, firstName, lastName])

  const showEditForm = () => {
    const displayName = document.querySelector('.display-name')
    const editForm = document.querySelector('.edit-name')
    displayName.classList.toggle('d-none')
    editForm.classList.toggle('d-none')
  }

  return (
    <main className="main bg-dark">
      <div className="header">

        <h1>Welcome back</h1>

        <div className='display-name'>
          <p>{firstName} {lastName}</p>
          <button type='button' className="edit-button" onClick={showEditForm}>Edit Name</button>
        </div>

        <div className='edit-name d-none'>
          <form>
            <div className='formdata d-flex'>
              <div className="input-wrapper">
                <label htmlFor="firstname" className='d-none'>Firstname</label>
                <input type="text" id="firstname" name="firstname" placeholder={firstName} />
              </div>
              <div className="input-wrapper">
                <label htmlFor="lastname" className='d-none'>Lastname</label>
                <input type="text" id="firstname" name="firstname" placeholder={lastName} />
              </div>
            </div>
            <div className='edit-buttons d-flex'>
              <button type='submit'>Save</button>
              <button type='button' onClick={showEditForm }>Cancel</button>
            </div>

          </form>
        </div>

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