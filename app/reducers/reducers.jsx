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
}];

const initialLoginState = {
  email: '',
  password:'',
  user: null,
  error: '',
  loading: false
};

export const medTablesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TABLE':
    return [
      ...state,
      action.table
    ];
    case 'ADD_TABLES':
      return [
      ...state,
      ...action.tables
      ];
    case 'DELETE_TABLE':
      return state.filter( item => item.id !== action.id);
    default:
      return state;
  }
};

export const selectorReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_TABLE':
      return {
        ...state,
        tableId: action.tableId};
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

export const loginReducer = (state = initialLoginState, action) =>{

  switch (action.type) {
    case 'EMAIL_CHANGED':
      return {...state, email: action.payload};
      break;
    case 'LOGIN_USER':
      return {...state, loading: true, error: ''};
    case 'PASSWORD_CHANGED':
      return {...state, password: action.payload};
      break;
    case 'LOGIN_USER_SUCCESS':
      return {
        ...state,
        user: action.payload,
        error:'',
        loading: false,
        email: '',
        password: ''};
    case'LOGOUT_USER_SUCCESS':
      return {
        ...state,
        user: null,
        error: '',
        loading: false,
        email: '',
        password: ''
      };
    case 'LOGIN_USER_FAIL':
      return {...state, error: 'Auth failed.', password: '', loading: false};
    default:
      return state;
  }
};
