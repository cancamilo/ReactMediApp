var uuid = require('node-uuid');
var moment = require('moment');
var helpers = require('helper');

var initialTables =     [{
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

export const medTablesReducer = (state = initialTables, action) => {
  switch (action.type) {
    case 'ADD_TABLE':
    return [
      ...state,
      action.table
    ];
    case 'DELETE_TABLE':
      return state.filter( item => item.id !== action.id);
    default:
      return state;
  }
};

export const selectorReducer = (state = null, action) => {
  switch (action.type) {
    case 'SELECT_TABLE':
      return action.id;
    default:
      return state;
  }
};

export const medicationsReducer = (state = [], action) =>{
  switch (action.type) {
    case 'ADD_MEDICATION':
      return [
        ...state,
        action.medication
      ];
      break;
    case 'ADD_MEDICATIONS':
      return [
        ...state,
        ...action.medications
      ];
      break;
    case 'REMOVE_MEDICATION':
        return state.filter( item => item.id !== action.id);
    case 'UPDATE_MEDICATION':
        return state.map( (medication) => {
          if( medication.id === action.id) {
            return {
              ...medication,
              [action.property]: action.value
            }
          }
          return medication;
        });
    default:
      return state;
  }
};
