import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './components/Home';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='App'>App</div>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
