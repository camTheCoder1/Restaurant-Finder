import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Cities from './components/Cities'
import SingleCity from './components/SingleCity'
import Restaurants from './components/Restaurants'
import Restaurant from './components/Restaurant'
import Banner from './components/Banner'

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Router>
          <Switch>
            <Route exact path='/cities' component={Cities} />
            <Route exact path='/cities/:cityId' component={SingleCity} />
            <Route exact path='/restaurants' component={Restaurants} />
            <Route exact path='/restaurants/:restaurantId' component={Restaurant} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
