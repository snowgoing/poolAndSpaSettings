import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Overview from './Overview';
import Home from './Home';
import SpaGuide from './SpaGuide';
import PoolGuide from './PoolGuide';
import NavBar from './NavBar';
import './../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
  }
  handleChange = (value) => {
    this.setState({
      slideIndex: value
    });
  }
  render() {
    return (
      <MuiThemeProvider>
          <Tabs onChange={this.handleChange} value={this.state.slideIndex} tabTemplateStyle={{background: 'red'}}>
            <Tab label="Spa" value={0} style={{background: '#80A1C1'}}/>
            <Tab label="Pool" value={1} style={{background: '#80A1C1'}}/>
          </Tabs>
          <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>
            <SpaGuide />
            <PoolGuide />
          </SwipeableViews>
          {/*}<Router>
            <div>
              <NavBar />
              <Route exact path="/" component={Home}></Route>
              <Route path="/spa" component={SpaGuide}></Route>
              <Route path="/pool" component={PoolGuide}></Route>
            </div>
          </Router> */}
      </MuiThemeProvider>
    );
  }
}

export default App;
