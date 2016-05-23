import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory, browserHistory} from 'react-router';
import App from './app';
import Experiments from './experiments';
import ArticlePage from './components/ArticlePage';
import ExperimentsTable from './components/ExperimentsTable';

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/article/:id" component={ArticlePage} />
        <Route path="/experiments" component={Experiments}/>
        <Route path="/experiments-table" component={ExperimentsTable} />
    </Router>
), document.getElementById('root'));
