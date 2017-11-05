import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from '../components/Home'
import SamplePageOne from '../components/SamplePageOne'
import SamplePageTwo from '../components/SamplePageTwo'
import SamplePageThree from '../components/SamplePageThree'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={Home} />
          <Route exact path="/pages/1" component={SamplePageOne} />
          <Route exact path="/pages/2" component={SamplePageTwo} />
          <Route exact path="/pages/3" component={SamplePageThree} />
        </div>
      </Router>
    );
  }
}

export default App;
