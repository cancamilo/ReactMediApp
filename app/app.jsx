var React = require('react');
var ReactDOM = require('react-dom');

// Allows children element to dispatch actionss
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');
//import firebase, {mediplansApp} from 'app/firebase/firebaseConfig';
import router from 'app/router/';
var actions = require('actions');

var store = require('configureStore').configure();

// mediplansApp.auth().onAuthStateChanged((user) =>{
//   if(user) {
//     console.log("on auth state changed...logged in");
//     store.dispatch(actions.loginUser(user));
//     store.dispatch(actions.clearTables());
//     store.dispatch(actions.startAddTables());
//     hashHistory.push('/DashboardApp/MediPlansList');
//   } else {
//     console.log("on auth state changed...no user");
//     store.dispatch(actions.logoutUser());
//     hashHistory.push('/');
//   }
// });

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  // TodoApp component and all of its children will be able to access data in the store and dispatcha actions
  <Provider store = {store}>
    <h1>Testing!</h1>
  </Provider>,
  document.getElementById('app')
);
