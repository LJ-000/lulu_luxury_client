import React, { Component } from 'react';

import { ResortCard } from './ResortCard.js'

class ResortCardContainer extends Component {

  state = {
    booked: false
  }

  render(){

    return(
      <div >

        <div className="booked-resorts-card-container">
          <h1>Upcoming reservations:</h1>
          {this.props.resorts.map(resort => <ResortCard key={resort.id} resort={resort} booked={!this.state.booked}/>)}
        </div>

        <div className="available-resorts-card-container">
          <h1>Book a resort:</h1>
          {this.props.resorts.map(resort => <ResortCard key={resort.id} resort={resort} booked={this.state.booked} />)}
        </div>

        {/* <div className="patron-excursion-card-container">
          {this.props.excursions.map(excursion => <ExcursionCard key={resort.id} excursion={excusion} />)}
        </div> */}

      </div>
    )
  }
}

export default ResortCardContainer