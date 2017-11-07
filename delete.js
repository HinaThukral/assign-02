const firebase = require('firebase');

firebase.initializeApp(
    {
      databaseURL: "https://slambook-84b43.firebaseio.com/"
    })
// const swan = firebase.database().ref().child('myPeople');

const swan = firebase.database().ref().child('myPeople/Hina');

// function remove(id){
//     swan.child(id).remove()
// }

// remove('Hina')
swan.remove();

firebase.database().ref("movies").child('hina').remove();