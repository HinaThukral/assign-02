const firebase = require('firebase');
firebase.initializeApp(
    {
      databaseURL: "https://slambook-84b43.firebaseio.com/"
    })
// const swan = firebase.database().ref().child('myPeople');

const swan = firebase.database().ref().child('myPeople/Hina');

// function update(id, newAge){
//     swan.child(id).update({Age: newAge})
// }

// update('Hina',55);

swan.update ({
  "Age": '23'
});