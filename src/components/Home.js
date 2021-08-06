import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Home extends Component {

  state = {
  }

  render(){
    return(
      <div className="home_container">

        <h1 className="welcome">🌴 🐧  Welcome to Lulu Luxury 🐧 🌴 </h1>
        <Link className="homepage_buttons" to='/login'>
          <button>Log In, Get Started</button>
        </Link>

      </div>
    )
  }
}

export default Home