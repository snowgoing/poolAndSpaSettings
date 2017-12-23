import React, { Component } from 'react';
import SuctionSpaSet from './../images/SuctionSpaSet.jpg';
import ReturnSpaSet from './../images/ReturnSpaSet.jpg';
import WaterfallSpaSet from './../images/WaterfallSpaSet.jpg';
import Heater from './../images/poolHeater.jpg';
import Pump from './../images/variablePoolPump.jpg';
import Pad from './../images/digitalPad.jpg';

class SpaGuide extends Component {
  render() {
    return (
      <div className='center'>
        <h2 className='test'>Spa Settings</h2>
        <h3>Open the lid of the digital pad</h3>
        <div><img className='scale_image' src={Pump} alt="Variable Pool Pump"/><p  className='test'>Spa Settings</p></div>
        <h3>Push STOP to turn off filter (Make sure adjacent green light is off)</h3>
        <div><img className='scale_image' src={Pad} alt="Digital Pool Pad"/><p  className='test'>Spa Settings</p></div>
        <h3>Turn handles according to pics</h3>
        <div><img className='scale_image' src={ReturnSpaSet} alt="Return Handle"/><p className='test'>Spa Settings</p></div>
        <div><img className='scale_image' src={SuctionSpaSet} alt="Suction Handle"/><p className='test'>Spa Settings</p></div>
        <div><img className='scale_image' src={WaterfallSpaSet} alt="Main Waterfall Handle"/><p className='test'>Spa Settings</p></div>
        <h3>Turn on heater. Button has three settings. Pool (down), Spa (up) and Off (middle). Push in upper part of button to turn on Spa heater.</h3>
        <div><img className='scale_image' src={Heater} alt="Pool and Spa Heater"/><p className='test'>Spa Settings</p></div>
        <h3>Press START to turn on pool filter. The plus and minus buttons can be used to increase or decrease the power of the spa jets.</h3>
        <div><img className='scale_image' src={Pad} alt="Digital Pool Pad"/><p className='test'>Spa Settings</p></div>
        <h1>Important: Remember to turn off heater and return handles back to pool settings when finished. </h1>
      </div>
    )
  }
}

export default SpaGuide;
