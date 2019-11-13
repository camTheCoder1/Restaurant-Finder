import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//import Search from "./components/Search";
import CityList from './components/CityList.jsx'
import SingleCity from './components/SingleCity.jsx'
import Restaurants from './components/Restaurants.jsx';
import SingleRestaurant from './components/SingleRestaurant.jsx';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            {/* <Route path='/' component={Search} /> */}
            <Route exact path='/cities' component={CityList} />
            <Route exact path='/cities/:cityId' component={SingleCity} />
            <Route exact path='cities/:cityId/restaurants' component={Restaurants} />
            <Route exact path='cities/:cityId/restaurants/:restaurantId' component={SingleRestaurant} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
