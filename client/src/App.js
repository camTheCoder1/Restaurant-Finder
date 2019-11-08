import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CityList from './components/CityList.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/city" component={CityList} />
          <Route exact path="/city/:id" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
