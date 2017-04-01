import * as redux from 'redux';
import thunk from 'redux-thunk';

import {medicationsReducer, selectorReducer, medTablesReducer, loginReducer} from 'reducers';

export var configure = (initialState = {}) => {

  var reducer = redux.combineReducers({
    selection: selectorReducer,
    tables: medTablesReducer,
    medications: medicationsReducer,
    loginInfo: loginReducer
  });

  // var store = redux.createStore(reducer, initialState, redux.compose(
  //   redux.applyMiddleware(thunk),
  //   window.devToolsExtension && window.devToolsExtension()
  // ));

  var store = redux.createStore(reducer, initialState, redux.compose(redux.applyMiddleware(thunk), window.devToolsExtension
        ? window.devToolsExtension()
        : f => f));

  return store;
};
