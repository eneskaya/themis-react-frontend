import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './app';
import Experiments from './experiments';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/experiments" component={Experiments} />
  </Router>
), document.getElementById('root'));
