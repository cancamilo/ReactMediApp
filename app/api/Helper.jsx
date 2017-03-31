import firebase, {medsDb, mediplansDb} from 'app/firebase/firebaseConfig';
var uuid = require('node-uuid');
var moment = require('moment');

export var generateRandomMedication = function() {

    //Generate random Number between 0 and 1682
    var rnd = getRandomInt(100, 1000);
    console.log(rnd);

    return medsDb.ref('/results/' + rnd).once('value').then( (snapshot) => {

      var obj = snapshot.val();
      console.log(rnd);
      var fda = obj.openfda !== undefined? obj.openfda : {};
      var med = {
            id: rnd,
            substance: fda.hasOwnProperty('generic_name') ? fda.generic_name[0] : '',
            commercialName: fda.hasOwnProperty('brand_name') ? fda.brand_name[0]: '',
            strength: getRandomInt(10, 100) + 'mg',
            form: 'Tablets',
            morning: getRandomInt(1, 3),
            midday: getRandomInt(1,3),
            evening: getRandomInt(1,3),
            night: getRandomInt(1,3),
            unity: 'mg',
            advice: obj.hasOwnProperty('dosage_and_administration') ? obj.dosage_and_administration[0] : '',
            reason: obj.hasOwnProperty('purpose') ? obj.purpose[0] : ''
        };
      return med;

    }, (error) => {
      console.log('failed to fetch that id');
    });
};

export var uploadCurrentMediPlan = function(mediplan, uid, tableId) {
      console.log("Adding for user:", uid, " table :", tableId);
      var node = mediplansDb.ref().child(`usersMedications/${uid}/${tableId}`);
      mediplan.forEach( (med) => {
          node.push(med).then(afterMedPushed).catch(medPushFailed);
      });
};

function afterMedPushed(result) {
  console.log("just pushed object: ", result);
};

function medPushFailed(e) {
  console.log("pushing med failed : ", e);
}

export var getRandomInt =  function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export var getRandomDate = function(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
};
