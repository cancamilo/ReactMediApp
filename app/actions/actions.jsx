import moment from 'moment';
import firebase, {mediplansDb} from 'app/firebase/firebaseConfig';
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
    var medRef = mediplansRef.child('medications').push(medication);

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
    return mediplansRef.child('medications').once('value').then((snapshot) => {
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


// Table Actions

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
    }
    var medRef = mediplansRef.child('tables').push(table);

    return medRef.then( () =>{
      dispatch(addTable(
        ...table,
        medRef.id
      ));
    });
  };
};

export var startAddTables = () => {
  return (dispatch, getState) =>{
    return mediplansRef.child('tables').once('value').then((snapshot) => {
      var tables = snapshot.val() || {};
      var parsedTables = [];
      Object.keys(tables).forEach( (tableId) =>{
        parsedTables.push({
          id: tableId,
          ...tables[tableId]
        });
      });
    });
  };
};


// var med = {
//       id: uuid(),
//       substance: action.substance,
//       commercialName: action.commercialName,
//       strength: action.strength,
//       form: action.form,
//       morning: action.morning,
//       midday: action.midday,
//       evening: action.evening,
//       night: action.night,
//       unity: action.unity,
//       advice: action.advice,
//       reason: action.reason
//   };
