 //require("dotenv").config()
const firebase = require('firebase');
var config = {
  databaseURL: "https://slambook-84b43.firebaseio.com/"
};
  firebase.initializeApp(config);
  const swan = firebase.database().ref().child('myPeople');
  
  
//   firebase.initializeApp(
//      {
//       databaseURL: "https://slambook-84b43.firebaseio.com/"
//      })
//   var database = firebase.database();


swan.set ({
   Hina: {
       id: 1,
      Age:  22,
    Phone_no: 1234,
    Address: 'abc',
    Hobbies: 'music',
    Qual:    'Graduate',
    Interests: 'Music'
   },
	
   Amanda: {
      id: 2,
      Age:  22,
    Phone_no: 134,
    Address: 'abc',
    Hobbies: 'music',
    Qual:    'Graduate',
    Interests: 'Music'
   }
});


// function addNewMember(id,member){
//     obj1.child(` ${id} ` ).set(member);
// }

// const hina = {
//     name: 'Hina',
//     Age:  22,
//     Phone_no: 1234,
//     Address: 'abc',
//     Hobbies: 'music',
//     Qual:    'Graduate',
//     Interests: 'Music'
// }

// addNewMember(1,hina);