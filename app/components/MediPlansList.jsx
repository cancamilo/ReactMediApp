var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var helpers = require('helper');


import {Link} from 'react-router';

var MediPlansList = React.createClass({
  getInitialState() {

    // var objs = [{
    //   planId: 1,
    //   description: 'dashofsdf',
    //   dateCreated: helpers.getRandomDate(new Date(), new Date(2017, 0, 1))
    // }, {
    //   planId: 2,
    //   description: 'oihasngg',
    //   dateCreated: helpers.getRandomDate(new Date(), new Date(2017, 0, 1))
    // }, {
    //   planId: 3,
    //   description: 'jhaoiff',
    //   dateCreated: helpers.getRandomDate(new Date(), new Date(2017, 0, 1))
    // }, {
    //   planId: 4,
    //   description: 'dhstjtzj',
    //   dateCreated: helpers.getRandomDate(new Date(), new Date(2017, 0, 1))
    // }, {
    //   planId: 5,
    //   description: 'agerhrthzj',
    //   dateCreated: helpers.getRandomDate(new Date(), new Date(2017, 0, 1))
    // }];
    //
    // return {
    //   mediplans: objs
    // }

    return {};
  },

  deleteClicked(id, obj, event){
    event.preventDefault();
    event.stopPropagation();
    event.cancelBubble = true;
    var {dispatch} = this.props;
    dispatch(actions.startDeletingTable(id));
    console.log("delete clicked ", id);
  },

  itemClicked(id, obj, event) {
    var {dispatch} = this.props;
    dispatch(actions.selectTable(id));
    dispatch(actions.startAddMedications());
  },

  addNewTable() {
    var {dispatch} = this.props;
    // TODO: show dialog to add title and other properties.
    dispatch(actions.startAddTable('my first mediplan'));
    console.log("adding table");
  },

  renderMediPlans(mediplans) {
    return mediplans.map( (item) => {
      return(
        <div  className="list-item-container" key={item.id}>
          <div>
            <h5>{item.id}</h5>
            <p>{item.title}</p>
            <div>
              {item.createdAt}
            </div>
          </div>
          <div className="list-options">
            <Link className="edit-button" to="/DashboardApp/MediPlanDetail" style={{width:'200px', color: 'red'}}>
              <button className="button expand custom-button" onClick={this.itemClicked.bind(this, item.id)}>Edit</button>
            </Link>
            <div className="delete-button">
              <button className="button expand custom-button" onClick={this.deleteClicked.bind(this, item.id)}>Delete</button>
            </div>
          </div>
        </div>);
    });
  },

  render() {
    //var {mediplans} = this.state;
    var {tables} = this.props;
    return (<div>
              <button className="button center-item" onClick={this.addNewTable}>Add Mediplan</button>
              <div>
                {this.renderMediPlans(tables)}
              </div>
           </div>);
  }
});

export default connect((state) => {
  return state;
})(MediPlansList);
