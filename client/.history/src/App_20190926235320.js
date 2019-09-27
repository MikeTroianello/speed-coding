import React from 'react';
import logo from './logo.svg';
import { ReactRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from './components/Home';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'></div>;
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
