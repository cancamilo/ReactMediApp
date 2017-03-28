import React from 'react';
var {connect} = require('react-redux');

var SignupForm = React.createClass({
  render() {
    return (
      <div className="callout callout-auth">
        <h3>Sign up</h3>
        <div>
          <input type="text" placeholder="User Name"/>
        </div>
        <div>
          <input type="password" placeholder="Password"/>
        </div>
        <div className="btn-div">
          <button className="button btn-self">Log in</button>
        </div>
      </div>
    );
  }
});

export default connect((state) =>{
  return state;
})(SignupForm);
