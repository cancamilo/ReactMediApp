import moment from 'moment';
import { hashHistory } from 'react-router';
import firebase, {mediplansApp, mediplansDb} from 'app/firebase/firebaseConfig';
var mediplansRef = mediplansDb.ref();

// Add in the specified list

export var addMedications = (medications) => {
  return {
    type: 'ADD_MEDICATIONS',
    medications
  };
};

export var addMedication = (medication) => {
  return {
    type: 'ADD_MEDICATION',
    medication
  }
};

export var startAddMedication = (medication) => {
  return (dispatch, getState) => {
    var uid = getState().loginInfo.user.uid;
    var tableId = getState().selection.tableId;
    var medRef = mediplansRef.child(`usersMedications/${uid}/${tableId}`).push(medication);
    return medRef.then( () => {
      dispatch(addMedication({
        ...medication,
        id: medRef.key
      }));
    });
  };
};

export var startAddMedications = () =>{
  return (dispatch, getState) => {
    var uid = getState().loginInfo.user.uid;
    var tableId = getState().selection.tableId;
    return mediplansRef.child(`usersMedications/${uid}/${tableId}`).once('value').then((snapshot) => {
      var medications = snapshot.val() || {};
      var parsedMeds = [];
      Object.keys(medications).forEach((medId) => {
        parsedMeds.push({
          id: medId,
          ...medications[medId]
        });
      });
      dispatch(addMedications(parsedMeds));
    });
  };
};

export var clearMedications = () =>{
  return {
      type: 'CLEAR_MEDICATIONS'
  };
};

// Table Actions

export var selectTable = (id) => {
  return {
    type: 'SELECT_TABLE',
    tableId: id
  };
}

export var addTables = (tables) => {
  return {
    type: 'ADD_TABLES',
    tables
  };
};

export var addTable = (table) =>{
  return {
    type: 'ADD_TABLE',
    table
  };
};

export var deleteTable = (id) => {
  return {
    type: 'DELETE_TABLE',
    id
  };
};

export var startAddTable = (title) => {
  return (dispatch, getState) =>{

    var table = {
      title: title,
      createdAt: moment().unix()
    };

    var uid = getState().loginInfo.user.uid;
    var medRef = mediplansRef.child(`usersTables/${uid}/tables`).push(table);

    return medRef.then( () =>{
      dispatch( addTable({...table, id: medRef.key}));
    });
  };
};

export var startAddTables = () => {
  return (dispatch, getState) =>{

    var uid = getState().loginInfo.user.uid;
    return mediplansRef.child(`usersTables/${uid}/tables`).once('value').then((snapshot) => {
      var tables = snapshot.val() || {};
      var parsedTables = [];
      Object.keys(tables).forEach( (tableId) =>{
        parsedTables.push({
          id: tableId,
          ...tables[tableId]
        });
      });
      dispatch(addTables(parsedTables));
    });
  };
};

export var startDeletingTable = (id) => {
  return (dispatch, getState) =>{
    var uid = getState().loginInfo.user.uid;
    var tabsRef = mediplansRef.child(`usersTables/${uid}/tables/${id}`).remove()
                 .then(() => {
                   console.log("table removed from user tables");
                   dispatch(deleteTable(id));
                 });
    var medsRef = mediplansRef.child(`usersMedications/${uid}/${id}`).remove()
                 .then(() => {
                   console.log("table removed from user medications");
                 });
  };
};

export var clearTables = () => {
  return {
    type: 'CLEAR_TABLES'
  };
};

// User Login Actions

export var changePassword = (text) => {
  return {
  type: 'PASSWORD_CHANGED',
  payload: text
  };
};

export var changeEmail = (text) => {
  return {
    type: 'EMAIL_CHANGED',
    payload: text
  };
};

export var startUserLogin = (email, password) => {
  return (dispatch, getState) =>{
      dispatch( {type: 'LOGIN_USER'});
      mediplansApp.auth().signInWithEmailAndPassword(email, password)
              .then( user => loginUserSuccess(dispatch, user))
              .catch((error) => {
                console.log("auth failed", error);
                dispatch({type: 'LOGIN_USER_FAIL'});
              });
  };
};

export var startUserSignup = (email, password) => {
  return (dispatch, getState) =>{
      dispatch( {type: 'LOGIN_USER'});
      mediplansApp.auth().createUserWithEmailAndPassword(email, password)
              .then( user => loginUserSuccess(dispatch, user))
              .catch((error) => {
                console.log("auth failed", error);
                dispatch({type: 'LOGIN_USER_FAIL'});
      });
  };
};

export var loginUser = (user) =>{
    return {
      type: 'LOGIN_USER_SUCCESS',
      payload: user
    };
};

const loginUserSuccess = (dispatch, user) =>{

  dispatch({
      type: 'LOGIN_USER_SUCCESS',
      payload: user});
};

export var startUserLogout = () =>{
  return (dispatch) => {
    mediplansApp.auth().signOut().then( () => {
      console.log("User logged out");
    })
  };
}

export var logoutUser = () =>{
  return {
    type: 'LOGIN_USER_SUCCESS'
  };
};
