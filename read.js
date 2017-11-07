const firebase = require('firebase');


 firebase.initializeApp(
    {
      databaseURL: "https://slambook-84b43.firebaseio.com/"
    })
    const swan = firebase.database().ref().child('myPeople');
swan.once('value',function(data) {
   console.log(data.val())
});