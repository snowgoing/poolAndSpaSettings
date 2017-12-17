import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className='nav_bar'>
        <div>
          <Link to='/' className='nav_bar_links'>Home</Link>
        </div>
        <div>
          {/* <Link to="/" className='nav_bar_links'>Complete Pool/Spa Overview</Link> */}
          <Link to="/spa" className='nav_bar_links'><span className='spaSpan'>Spa</span></Link>
          <Link to="/pool" className='nav_bar_links'>Pool</Link>
        </div>
      </nav>
    )
  }
}

export default NavBar;
