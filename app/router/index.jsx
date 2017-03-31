import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import firebase, {mediplansApp} from 'app/firebase/firebaseConfig';
import DashboardApp from 'DashboardApp';
import MediPlansList from 'MediPlansList';
import MediPlanGrid from 'MediPlanGrid';
import Registration from 'Registration';
import Login from 'Login';
import SignupForm from 'SignupForm';

var requireLogin = (nextState, replace, next) => {
  if (!mediplansApp.auth().currentUser) {
    replace('/');
  }
  next();
};

var isUserLoggedin = (nextState, replace, next) =>{
  console.log("is user logged in? ", mediplansApp.auth().currentUser);
  if(mediplansApp.auth().currentUser) {
    console.log("redirecting to list");
    replace('/DashboardApp/MediPlansList');
  }
  next();
};

export default (
  <Router history={hashHistory}>
     <Route path="/" component={Registration}>
        <IndexRoute component={Login} onEnter={isUserLoggedin}/>
        <Route path="/SignupForm" component={SignupForm} />
     </Route>
     <Route path="DashboardApp" component={DashboardApp}>
        <Route path="MediPlansList" component={MediPlansList} onEnter={requireLogin} />
        <Route path="MediPlanDetail" component={MediPlanGrid} onEnter={requireLogin} />
     </Route>
  </Router>
);
