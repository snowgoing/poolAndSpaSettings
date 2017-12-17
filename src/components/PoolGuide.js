import React, { Component } from 'react';
import SuctionPoolSet from './../images/SuctionPoolSet.jpg';
import ReturnPoolSet from './../images/ReturnPoolSet.jpg';
import WaterfallPoolSet from './../images/WaterfallPoolSet.jpg';
import Heater from './../images/poolHeater.jpg';
import ControlBox from './../images/PoolControlBox.jpg';
import DialOff from './../images/PoolDialOff.png';
import DialOn from './../images/PoolDialOn.png';

class PoolGuide extends Component {
  render() {
    return (
      <div className='center'>
        <h2>Pool Settings</h2>
        <p>Open Control Box on house exterior wall</p>
        <div><img className='scale_image' src={ControlBox} alt="Pool Control Box"/></div>
        <p>Turn off pool filter</p>
        <div><img className='scale_image' src={DialOff} alt="Pool Dial Off"/></div>
        <p>Turn handles according to pics</p>
        <div><img className='scale_image' src={ReturnPoolSet} alt="Return Handle"/></div>
        <div><img className='scale_image' src={SuctionPoolSet} alt="Suction Handle"/></div>
        <div><img className='scale_image' src={WaterfallPoolSet} alt="Main Waterfall Handle"/></div>
        <p>Turn off pool heater. Button has three settings. Pool (down), Spa (up) and Off (middle).</p>
        <div><img className='scale_image' src={Heater} alt="Pool and Spa Heater"/></div>
        <p>Turn on pool filter</p>
        <div><img className='scale_image' src={DialOn} alt="Pool Dial On"/></div>
      </div>
    )
  }
}

export default PoolGuide;
