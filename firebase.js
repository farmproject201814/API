var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyAZC4OS3ooI26df9XpOJDj8zSwVxj8mUis",
    authDomain: "farmproject-831d7.firebaseapp.com",
    databaseURL: "https://farmproject-831d7.firebaseio.com",
    projectId: "farmproject-831d7",
    storageBucket: "farmproject-831d7.appspot.com",
    messagingSenderId: "40438337476"
  };
  firebase.initializeApp(config);

  exports.db = function(){
      return firebase.database();
  }