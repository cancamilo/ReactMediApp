import React from 'react';
var {connect} = require('react-redux');
import {Link, IndexLink} from 'react-router';
import Login from 'Login';
import SignupForm from 'SignupForm';

 var Registration = React.createClass({
   render(){
    return (
      <div>
        <h1 className="page-title"> Mediplan App</h1>
        <div className="row">
          <div className="columns small-centered small-10 medium-6 large-4">
              {this.props.children}
          </div>
        </div>
      </div>
    );
   }
 });

 export default connect((state) =>{
   return state;
 })(Registration);
