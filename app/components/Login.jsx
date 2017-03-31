var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
import {Link} from 'react-router';
import * as Redux from 'react-redux';

var Login = React.createClass({
  onLogin(event) {
    event.preventDefault();
    var {dispatch, email, password} = this.props;
    dispatch(actions.startUserLogin(email, password));
  },
  render() {
    var {dispatch, email, password} = this.props;
    return (
        <div className="callout callout-auth">
          <h4>meHealthX</h4>
          <img className="start-page-img" src="meHXLogo.png" />
          <div>
            <input type="email" ref="emailInput" placeholder="Email" value={email} onChange={() => {
              var text = this.refs.emailInput.value;
              dispatch(actions.changeEmail(text));
            }}/>
          </div>
          <div>
            <input type="password" ref="passInput" placeholder="Password" value={password} onChange={ () =>{
              var text = this.refs.passInput.value;
              dispatch(actions.changePassword(text));
            }}/>
          </div>
          <div className="btn-div">
            <button className="button btn-self" onClick={this.onLogin}>Log in</button>
          </div>
          <div>
            <h6>New to meHealthX?</h6>
            <Link to="/SignupForm"> Register </Link>
          </div>
        </div>
    );
  }
});


export default connect((state) =>{
  return {
    email: state.loginInfo.email,
    password: state.loginInfo.password,
    loading: state.loginInfo.loading,
    error: state.loginInfo.error
  };
})(Login);
