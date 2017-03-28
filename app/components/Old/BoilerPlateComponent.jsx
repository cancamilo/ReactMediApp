var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var BoilerPlateComponent = React.createClass({
  render() {
    return (
      <div>
        BoilerPlate!
     </div>);
  }
});

export default connect((state) => {
  return state;
})(BoilerPlateComponent);
