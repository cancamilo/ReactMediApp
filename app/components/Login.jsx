var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var Login = React.createClass({
  render() {
    return (
        <div className="callout callout-auth">
          <h3>Login</h3>
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
})(Login);
