import React from 'react'
import {Link} from 'react-router-dom'
import LoggedOutNavbar from './logged_out_navbar'

const Splash = props => {
    return (
    <div className='splash-wrapper'>
      <LoggedOutNavbar/>
      <header className='splash-header'>
          <h1>Less stress when sharing expenses on trips.</h1>
          <br/>
          <h3>Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family.</h3>
      </header>
      <div className='splash-body'>
        <img className='splash-desktop' src={window.desktopURL} alt='desktop'/>
        <img className='splash-mobile' src={window.mobileURL} alt='mobile'/>
        {/* <img src={window.houseURL} alt='house'/> */}
      </div>
        <div className='footer'>
          <footer>
            <p className='made-with-smiles'>Made with ☻ in New York, NY, USA</p>
            <p className='copyright'>Copyright © 2019 Splatwise, Inc. All rights reserved</p>
          </footer>
        </div>
    </div>
  )
}


export default Splash;