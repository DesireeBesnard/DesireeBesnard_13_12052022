import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {reset} from '../../features/auth/authSlice'
import { getProfile, editProfile } from "../../features/user/userSlice"
import './style.css'

function User() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector( state => state.auth )
  const {firstName} = useSelector( state => state.user )
  const { lastName } = useSelector( state => state.user )
  let userData = {
    firstName : "",
    lastName: ""
  }

  useEffect(() => {

    //redirect if user not connected
    if (!user) {
      navigate("/")
      return
    }

    /*userService.getProfile()
      .then(response => {
        let user = JSON.parse(localStorage.getItem("user"))
        //setFirstName(response.data.body.firstName)
        //setLastName(response.data.body.lastName)
        //user['firstName'] = firstName
        //user['lastName'] = response.data.body.lastName
        localStorage.setItem("user", JSON.stringify(user))
      })*/
    dispatch(getProfile())
  }, [dispatch, navigate, user])

  const showEditForm = () => {
    const displayName = document.querySelector('.display-name')
    const editForm = document.querySelector('.edit-name')
    displayName.classList.toggle('d-none')
    editForm.classList.toggle('d-none')
  }

  const onChange = e => {
    if (e.target.name === 'firstname') {
      userData.firstName = e.target.value
    } else {
      userData.lastName = e.target.value
    }
  }

  const onSubmit = e => {
    e.preventDefault()

    /*userService.editProfile(userData)
      .then(response => {
        let user = JSON.parse(localStorage.getItem("user"))
        user['firstName'] = response.data.body.firstName
        user['lastName'] = response.data.body.lastName
        localStorage.setItem("user", JSON.stringify(user))
        setFirstName(response.data.body.firstName)
        setLastName(response.data.body.lastName)
        showEditForm()
      })*/
      dispatch(editProfile(userData))
      console.log("J'ai édité normalement")
      showEditForm()
      dispatch(reset())
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
          <form onSubmit={onSubmit}>
            <div className='formdata d-flex'>
              <div className="input-wrapper">
                <label htmlFor="firstname" className='d-none'>Firstname</label>
                <input type="text" id="firstname" name="firstname" placeholder={firstName} onChange={onChange} />
              </div>
              <div className="input-wrapper">
                <label htmlFor="lastname" className='d-none'>Lastname</label>
                <input type="text" id="firstname" name="lastname" placeholder={lastName} onChange={onChange} />
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