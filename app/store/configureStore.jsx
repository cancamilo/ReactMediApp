import * as redux from 'redux';
import thunk from 'redux-thunk';
import {medicationsReducer, selectorReducer, medTablesReducer} from 'reducers';

export var configure = (initialState = {}) => {

  var reducer = redux.combineReducers({
    selectedItem: selectorReducer,
    tables: medTablesReducer,
    medications: medicationsReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
  ));

  return store;
};
