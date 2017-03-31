import firebase from 'firebase';

var medsApp = {};
var mediplansApp = {};

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
