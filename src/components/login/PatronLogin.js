import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Patron from '../patron_view/Patron.js'
import MemberForm from '../patron_view/MemberForm.js'

class PatronLogin extends Component {

  state = {
    username: "",
    password: "",
    patron: {},
    bookings: [],
    resorts: [],
    excursions: []
  }

  submitHandler = (event) => {
    event.preventDefault()
    console.log("Add on submit logic!")

    const usernameInput = event.target.children[0]
    const passwordInput = event.target.children[2]


    this.findPatronData()

    usernameInput.value = ""
    passwordInput.value = ""

    this.setState({
      username: "",
      password: "",
      patron: {},
      bookings: [],
      resorts: [],
      excursions: []
    })

  }

  findPatronData = () => {
    let patronUsername = this.state.username
    let patrons = this.props.patrons
    let resorts = this.props.resorts
    let bookings = this.props.bookings
    let excursions = this.props.excursions

    let loginPatron = patrons.find(patron => patron.patron_name === patronUsername)
    this.setState({ patron: loginPatron })
    
    if(loginPatron){
      alert('We have found your account and reservations! Please click "Go to profile" to continue!')
      console.log(loginPatron)

      let patronBookings = bookings.filter(booking => booking.patron_id === loginPatron.id)
      this.setState({ bookings: patronBookings })
      console.log(patronBookings)
  
      let patronResorts = patronBookings.map(booking => {
        return (resorts.find(resort => resort.id === booking.resort_id))
      })
      let filteredResorts = [...new Set(patronResorts)]
      this.setState({ resorts: filteredResorts })
      console.log(filteredResorts)
  
      let patronExcursions = patronBookings.map(booking => {
        return (excursions.find(excursion => excursion.id === booking.excursion_id))
      })
      let filteredExcursions = [...new Set(patronExcursions)]
  
      this.setState({ excursions: filteredExcursions })
      console.log(filteredExcursions)
  
      this.props.patronView(loginPatron, patronBookings, filteredResorts, filteredExcursions)
    } else {
      alert("There is no one with that name in our database. Please try again, or feel free to register to the app below!")
    }
  }

  render() {
    return (
      <div className="patron_login_container">
        <h1 className="patron_login"> Welcome Back</h1>

        <div id="login-form">

          <h1 className="login_info"> Enter Login Info:</h1>
          <form onSubmit={this.submitHandler}>

            <input onChange={(event) => this.setState({ username: event.target.value })} type="text" placeholder="Enter your name" />
            <br></br>
            <input onChange={(event) => this.setState({ password: event.target.value })} type="text" placeholder="Enter password" />

            <br></br>

            <button type='submit' id="login-button">Login</button>

            <Link to='/patron-view'>
              <button id="profile">Go to Profile</button>
            </Link>

          </form>

          <MemberForm addmember = {this.props.addmember}/>
        </div>

      </div>
    )
  }
}

export default PatronLogin