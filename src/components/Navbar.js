import React, { useState } from 'react';
import FlightIcon from '@material-ui/icons/Flight'

function Navbar() {
        return (
            <>
           <div className ="Navbar">
               <div className ="leftSide">
                <a className="plane_icon"><FlightIcon/></a>
                <a className="home_nav" href="/Home"> Home </a>
                <a className="patron_nav" href="/Patron-login"> Traveler Login </a>
                <a className="resort_nav"  href="Resort-login">  Resort Login </a>
                </div>        
           </div>
                
            </>
        );
    };

export default Navbar 

