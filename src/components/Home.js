import React, { Component } from 'react';
import homeAerial from './../images/homeAerial.jpg';

class Home extends Component {
  render() {
    return (
      <div className='center'>
        <div><img className='scale_image' src={homeAerial} alt="Aerial home view"/></div>
      </div>
    )
  }
}

export default Home;
