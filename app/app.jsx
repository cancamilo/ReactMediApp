var React = require('react');
var ReactDOM = require('react-dom');

// Allows children element to dispatch actionss
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import DashboardApp from 'DashboardApp';
import MediPlansList from 'MediPlansList';
import MediPlanGrid from 'MediPlanGrid';
import Registration from 'Registration';
import Login from 'Login';
import SignupForm from 'SignupForm';

var store = require('configureStore').configure();

// Load foundation
$(document).foundation();


// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  // TodoApp component and all of its children will be able to access data in the store and dispatcha actions
  <Provider store = {store}>
    <Router history={hashHistory}>
       <Route path="/" component={DashboardApp}>
        <Route component={Registration}>
          <IndexRoute component={Login}/>
          <Route path="SignupForm" component={SignupForm}/>
        </Route>
        <Route path="MediPlansList" component={MediPlansList} />
        <Route path="MediPlanDetail" component={MediPlanGrid} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
