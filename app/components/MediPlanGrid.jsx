var React = require('react');
var ReactDataGrid = require('react-data-grid');
var uuid = require('node-uuid');
var moment = require('moment');
var {connect} = require('react-redux');
var actions = require('actions');
var helpers = require('helper');

const { Editors, Formatters } = require('react-data-grid-addons');
const { AutoComplete: AutoCompleteEditor, DropDownEditor } = Editors;
const { DropDownFormatter } = Formatters;

var MediPlanGrid = React.createClass({
    componentWillMount() {
      var {dispatch} = this.props;
      console.log("componentWillmount");
      dispatch(actions.clearMedications());
      dispatch(actions.startAddMedications());
    },
    getInitialState() {
      this.numberOfRows = 5;
      this.mColumns = [
        {
          key:'substance',
          name: 'Wirkstoff',
          editable: true
        },
        {
          key:'commercialName',
          name:'Handelsname',
        },
        {
          key:'strength',
          name:'Stärke',
          width:60
        },
        {
          key:'form',
          name:'Form',
          width:50
        },
        {
          key:'morning',
          name:'Mo',
          width:40
        },
        {
          key:'midday',
          name:'Mi',
          width:40
        },
        {
          key:'evening',
          name:'Ab',
          width:40
        },
        {
          key:'night',
          name:'zN',
          width:40
        },
        {
          key:'unity',
          name:'Einheit',
          width:40
        },
        {
          key:'advice',
          name:'Hinweis',
        },
        {
          key:'reason',
          name:'Grund',
        }
      ];
      return {rows: this.createRows()};
    },
    generateRandomRow() {
      var {dispatch} = this.props;
      var med = helpers.generateRandomMedication().then( (item) => {
        console.log("returned in component promise", item);
        dispatch(actions.addMedication(item));
      });

    },
    uploadMediPlan() {
       var {medications, selection, loginInfo} = this.props;
       console.log("selection ", selection);
       helpers.uploadCurrentMediPlan(medications, loginInfo.user.uid, selection.tableId);
    },
    createRows() {
      // TODO: generate random rows data
      let rows = [];
      for(let i = 0; i < this.numberOfRows ; i++){
        rows.push({
          id: i,
          substance: 'ghh',
          commercialName: 'hfh',
          strength: 'fsf',
          form: 'fsdf',
          mornings: 'fsf',
          midday: 'fsf',
          evening: 'fsf',
          night: 'fsf',
          unity: 'eee',
          advice: '1234',
          reason: '5788'
        });
      }
      this.mRows = rows;
      return rows;
    },
    rowGetter(i){
      var {medications} = this.props;
      return medications[i];
    },
    render: function() {
      var {medications} = this.props;
      return (
        <div>
          <div className="grid-container">
            <ReactDataGrid
              enableCellSelect={true}
              columns={this.mColumns}
              rowGetter={this.rowGetter}
              rowsCount={medications.length}/>
            <button className="button" onClick={this.generateRandomRow}>
                Add Medication
            </button>
            <div className="empty-space"/>
            <button className="button" onClick={this.uploadMediPlan}>
              Done!
            </button>
          </div>
        </div>
      );
    }
});

export default connect((state) => {
  return state;
})(MediPlanGrid);
