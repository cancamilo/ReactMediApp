var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');
var {connect} = require('react-redux');
var actions = require('actions');
var helpers = require('helper');

import MediPlanGrid from 'MediPlanGrid';
import MediPlansList from 'MediPlansList';


var DashboardApp = React.createClass({
    render: function() {

      return (<div>
                <div className="page-actions">
                  <a href="#">Logout</a>                  
                </div>
                <h2>meHealthX App</h2>
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
