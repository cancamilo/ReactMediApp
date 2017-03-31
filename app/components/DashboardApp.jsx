var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');
var {connect} = require('react-redux');
var actions = require('actions');
var helpers = require('helper');

import * as Redux from 'react-redux';
import MediPlanGrid from 'MediPlanGrid';
import MediPlansList from 'MediPlansList';


var DashboardApp = React.createClass({

    onLogout(e) {
      var {dispatch} = this.props;
      e.preventDefault();
      dispatch(actions.startUserLogout());
    },
    render: function() {

      return (<div>
                <div className="page-actions">
                  <a href="#" onClick={this.onLogout}>Logout</a>
                </div>
                <h3 className="text-center">Dashboard</h3>
                <div>
                    {this.props.children}
                </div>
             </div>);
    }
});


//export {DashboardApp};
export default connect((state) => {
  return state;
})(DashboardApp);
