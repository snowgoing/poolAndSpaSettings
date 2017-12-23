import React, { Component } from 'react';
import SuctionPoolSet from './../images/SuctionSpaSet.jpg';
import ReturnPoolSet from './../images/ReturnSpaSet.jpg';
import WaterfallPoolSet from './../images/WaterfallSpaSet.jpg';
import Heater from './../images/poolHeater.jpg';
import Pump from './../images/variablePoolPump.jpg';
import Pad from './../images/digitalPad.jpg';

class PoolGuide extends Component {
  render() {
    return (
      <div className='center'>
        <h2 className='test'>Pool Settings</h2>
        <h3>Open the lid of the digital pad</h3>
        <div><img className='scale_image' src={Pump} alt="Variable Pool Pump"/><p className='test'>Pool Settings</p></div>
        <h3>Push STOP to turn off filter (Make sure adjacent green light is off)</h3>
        <div><img className='scale_image' src={Pad} alt="Digital Pool Pad"/><p className='test'>Pool Settings</p></div>
        <h3>Turn handles according to pics</h3>
        <div><img className='scale_image' src={ReturnPoolSet} alt="Return Handle"/><p className='test'>Pool Settings</p></div>
        <div><img className='scale_image' src={SuctionPoolSet} alt="Suction Handle"/><p className='test'>Pool Settings</p></div>
        <div><img className='scale_image' src={WaterfallPoolSet} alt="Main Waterfall Handle"/><p className='test'>Pool Settings</p></div>
        <h3>Turn off pool heater. Button has three settings. Pool (down), Spa (up) and Off (middle).</h3>
        <div><img className='scale_image' src={Heater} alt="Pool and Spa Heater"/><p className='test'>Pool Settings</p></div>
        <h3>Press START to turn on pool filter</h3>
        <div><img className='scale_image' src={Pad} alt="Digital Pool Pad"/><p className='test'>Pool Settings</p></div>
      </div>
    )
  }
}

export default PoolGuide;
