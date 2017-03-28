import firebase from 'firebase';

var meds = {};
var mediplans = {};

try {
  // Initialize Firebase Full Medations Data
  var configFull = {
    apiKey: "AIzaSyCW2T31YjkpFWdelQzvKN_dAnnszNcPKdc",
    authDomain: "mediplans-51d2c.firebaseapp.com",
    databaseURL: "https://mediplans-51d2c.firebaseio.com",
    storageBucket: "mediplans-51d2c.appspot.com",
    messagingSenderId: "636209396658"
  };

  // Initialize Firebase
  var configMediplanApp = {
    apiKey: "AIzaSyBREvKe5S8uIHKL6BTnnJ4hVdAgqp7Vfh8",
    authDomain: "mediplanapp.firebaseapp.com",
    databaseURL: "https://mediplanapp.firebaseio.com",
    storageBucket: "mediplanapp.appspot.com",
    messagingSenderId: "4995134571"
  };

  meds = firebase.initializeApp(configFull);
  mediplans = firebase.initializeApp(configMediplanApp, 'mediplans');

} catch (e) {
  console.log("Firebase initialization error", e);
}

export var firebaseRef = firebase.database().ref();
export var medsDb = meds.database();
export var mediplansDb = mediplans.database();
export default firebase;
