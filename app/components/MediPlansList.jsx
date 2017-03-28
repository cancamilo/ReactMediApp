var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');


import {Link} from 'react-router';

var MediPlansList = React.createClass({
  getInitialState() {
    var objs =
    [{
      planId: 1,
      description: 'dashofsdf',
      dateCreated: helpers.getRandomDate(new Date(), new Date(2017, 0, 1))
    },
    {
      planId: 2,
      description: 'oihasngg',
      dateCreated: helpers.getRandomDate(new Date(), new Date(2017, 0, 1))
    },
    {
      planId: 3,
      description: 'jhaoiff',
      dateCreated: helpers.getRandomDate(new Date(), new Date(2017, 0, 1))
    },
    {
      planId: 4,
      description: 'dhstjtzj',
      dateCreated: helpers.getRandomDate(new Date(), new Date(2017, 0, 1))
    },
    {
      planId: 5,
      description: 'agerhrthzj',
      dateCreated: helpers.getRandomDate(new Date(), new Date(2017, 0, 1))
    }];

    return {
      mediplans: objs
    }
  },

  deleteClicked(id, obj, event){
    event.preventDefault();
    event.stopPropagation();
    event.cancelBubble = true;
    console.log("delete clicked");
  },

  itemClicked(id, obj, event) {

    console.log("mediplan clicked ", id);
  },

  renderMediPlans(mediplans) {
    return mediplans.map( (item) => {
      return(
        <div  className="list-item-container" key={item.planId}>
          <div>
            <h5>{item.planId}</h5>
            <p>{item.description}</p>
            <div>
              {item.dateCreated}
            </div>
          </div>
          <div className="list-options">
            <Link className="edit-button" to="/MediPlanDetail" style={{width:'200px', color: 'red'}}>
              <button className="button expand custom-button" onClick={this.itemClicked.bind(this, item.planId)}>Edit</button>
            </Link>
            <div className="delete-button">
              <button className="button expand custom-button" onClick={this.deleteClicked.bind(this, item.planId)}>Delete</button>
            </div>
          </div>
        </div>);
    });
  },

  render() {
    var {mediplans} = this.state;
    return (<div>
              <div>
                  MediPlansss!!
              </div>
              <div>
                {this.renderMediPlans(mediplans)}
              </div>
              <button className="button">Add Mediplan</button>
           </div>);
  }
});

export default connect((state) => {
  return state;
})(MediPlansList);
