
import React, { Component } from 'react';
import poolFilterOverhead from './../images/poolFilterOverhead.png';
import returnHandle from './../images/returnHandle.png';
import waterfallHandle from './../images/waterfallHandle.png';
import suctionHandles from './../images/suctionHandles.png';

class Overview extends Component {
  render() {
    return (
      <div>
        <div className=''><img className='scale_image' src={poolFilterOverhead} alt="Pool filter"/></div>

        <div>
          <h2>The Basics</h2>
          <p>The water is sucked in to the filter from the pool and spa through three ports:</p>
          <ul>
            <li>The Skimmer</li>
            <li>The Kreepy Krauly</li>
            <li>The Spa</li>
          </ul>
          <p>The water is returned to the pool and spa through three ports:</p>
          <ul>
            <li>The Main Waterfall</li>
            <li>Jets in the pool</li>
            <li>Jets in the spa</li>
          </ul>
          <p>That's it. The pool filter's job is to take in the water from the pool and spa, clean it and send it back.</p>
        </div>

        <div>
          <h2>The Returns</h2>
          <p>The black handles can be turned to block or allow the flow of water and determine
            how the water will get to and from the filter and in what proportion. For instance:</p>
          <div className=''> <img className='scale_image' src={returnHandle} alt="Return Handle"/></div>
          <p className='dialogue'>This is one of two handles that controls how the water will be returned back
            to the pool. If the handle was turned an inch or so clockwise, the water would not be
            returned to the pool at all. The Off handle would block the flow of water completely. Instead, all the water would be returned to the spa through the spa's underwater jets. Because this pool
            has a waterfall from the spa to the pool, the spa can not overfill. It will always spill into the pool
            thus preserving the balance. If the handle was turned counterclockwise to block the return back to the spa, all the water would be returned to the pool.
            This would stop the waterfall from the spa to the pool because the spa needs to overfill in order to spill into the pool.
            With no water flowing back to the spa, it would never overfill. Additionally, if there was any suction from the spa, the spa would eventually drain out.
            The pic above indicates that most of the water is being returned to the spa, but not all.
          </p>
          <div className=''> <img className='scale_image' src={waterfallHandle} alt="Waterfall handle"/></div>
          <p className='dialogue'>
            This is the second return handle. In this position, the main waterfall is completely on. Water is flowing through
            this pipe and on to the main waterfall in the pool. The off handle is not impeding the water flow. If the handle was rotated either clockwise or counterclockwise, to
            the top or bottom, it would block the water flowing through the pipe and turn off the water to the waterfall. The water
            would instead come out more forcefully to the spa, where the other return handle has been set.
          </p>
          <h3>Return Summary</h3>
          <p className='dialogue'>The water has to return to either the pool, the spa or both. The Off handles control what percentage of the return goes where.</p>
          <h2>The Suction</h2>
          <div className=''> <img className='scale_image' src={suctionHandles} alt="Suction handle"/></div>
          <p className='dialogue'>The suction handles control how the water is brought in from the pool and spa.
          The pic above indicates that no water is being brought in from the spa. The Off handle is blocking the pipe
          that allows water to travel from the spa into the filter. Instead, all the water is being
          brought in from the pool through the skimmer and kreepy krauly. In this case, most of the suction is
          from the kreepy krauly and some from the skimmer. If the spa handle was turned all the way clockwise, then all the water brought into the
          filter would be from the spa. This would prevent the skimmer and kreepy krauly from working at all. And if the Return handle was allowing any water
          at all back to the pool then the spa would drain faster than it fills. This would be an example where the balance was not preserved.
          </p>
          <h3>Suction Summary</h3>
          <p>The Suction handles determines where the filter brings in the water from. The skimmer, the kreepy krauly, the spa or all three</p>
        </div>
        <h2>Working the Spa</h2>
        <p>Using the principles we've learned, if we wanted to heat just the spa then we want to cut out the pool entirely. Instead, all the water must be brought in
        from the spa and returned to the spa.</p>
        <ul>
          <li>First: If the filter is running, manually turn OFF by opening the metal box to the left of the heater. In the top right quarter of the box, there is a yellow clock dial. Immediately below
          it is a metal swicth that says Off and On. Ensure the switch is flipped off.</li>
          <li>Second: Turn off the water to the main waterfall. By turning the Off Handle either clockwise or counterclockwise, we block the pipe that returns water to the waterfall.</li>
          <li>Third: Turn off the return to the pool. Turn the Off Handle on the Pool/Spa Return all the way clockwise. This will block the pipe that returns water to the pool.</li>
          <li>Fourth: Turn the Off Handle on the Suction all the way clockwise and so that no water is being brought in from the pool.</li>
          <li>Fifth: Turn ON the pool filter.</li>
          <li>Sixth: On the heater, push in at the top of the white button. This will turn on the heat to the spa. You can set the temperature with the dial at the left.</li>
        </ul>
        <h4>Important: When spa time is over, remember to turn off the heater and return the handles back to their previous positions.</h4>
      </div>
    )
  }
}

export default Overview;
