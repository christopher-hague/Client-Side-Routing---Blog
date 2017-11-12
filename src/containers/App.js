import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from '../components/Home'
import SamplePageOne from '../components/SamplePageOne'
import SamplePageTwo from '../components/SamplePageTwo'
import SamplePageThree from '../components/SamplePageThree'
import NavBar from '../components/NavBar'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <Route exact path="/home" component={Home} />
          <Route exact path="/first-page" component={SamplePageOne} />
          <Route exact path="/second-page" component={SamplePageTwo} />
          <Route exact path="/third-page" component={SamplePageThree} />
        </div>
      </Router>
    );
  }
}

export default App;
