import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './styles/App.css';

import Home from './pages/home';
import Profile from './pages/profile';

const App = () => (
  <Router>
    <Switch>  
      <Route path="/profile" exact component={Profile}/>
      <Route path="/" exact component={Home}/>
    </Switch>
  </Router>
)

export default App;
