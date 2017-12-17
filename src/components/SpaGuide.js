import React, { Component } from 'react';
import SuctionSpaSet from './../images/SuctionSpaSet.jpg';
import ReturnSpaSet from './../images/ReturnSpaSet.jpg';
import WaterfallSpaSet from './../images/WaterfallSpaSet.jpg';
import Heater from './../images/poolHeater.jpg';
import ControlBox from './../images/PoolControlBox.jpg';
import DialOff from './../images/PoolDialOff.png';
import DialOn from './../images/PoolDialOn.png';

class SpaGuide extends Component {
  render() {
    return (
      <div className='center spaPage'>
        <h2>Spa Settings</h2>
        <p>Open Control Box on house exterior wall</p>
        <div><img className='scale_image' src={ControlBox} alt="Pool Control Box"/></div>
        <p>Turn off pool filter</p>
        <div><img className='scale_image' src={DialOff} alt="Pool Dial Off"/></div>
        <p>Turn handles according to pics</p>
        <div><img className='scale_image' src={ReturnSpaSet} alt="Return Handle"/></div>
        <div><img className='scale_image' src={SuctionSpaSet} alt="Suction Handle"/></div>
        <div><img className='scale_image' src={WaterfallSpaSet} alt="Main Waterfall Handle"/></div>
        <p>Turn on heater. Button has three settings. Pool (down), Spa (up) and Off (middle). Push in upper part of button to turn on Spa heater.</p>
        <div><img className='scale_image' src={Heater} alt="Pool and Spa Heater"/></div>
        <p>Turn on pool filter</p>
        <div><img className='scale_image' src={DialOn} alt="Pool Dial On"/></div>
        <h2>Important: Remember to turn off heater and return dials back to pool settings when finished. </h2>
      </div>
    )
  }
}

export default SpaGuide;
