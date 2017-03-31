import firebase from 'firebase';

var medsApp = {};
var mediplansApp = {};

try {
  // Initialize Firebase Full Medations Data
  var configFull = {
    apiKey: process.env.API_KEY_MEDS,
    authDomain: process.env.AUTH_DOMAIN_MEDS,
    databaseURL: process.env.DATABASE_MEDS_URL,
    storageBucket: process.env.STORAGE_BUCKET
  };

  // Initialize Firebase
  var configMediplanApp = {
    apiKey: process.env.API_KEY_MEDIPLAN,
    authDomain: process.env.AUTH_DOMAIN_MEDIPLAN,
    databaseURL: process.env.DATABASE_MEDIPLAN_URL,
    storageBucket: process.env.STORAGE_BUCKET  
  };

  medsApp = firebase.initializeApp(configFull);
  mediplansApp = firebase.initializeApp(configMediplanApp, 'mediplans');

} catch (e) {
  console.log("Firebase initialization error", e);
}

export var mediplansApp = mediplansApp;
export var firebaseRef = firebase.database().ref();
export var medsDb = medsApp.database();
export var mediplansDb = mediplansApp.database();
export default firebase;
