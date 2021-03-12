
//ADD YOUR FIREBASE LINKS

   // Your web app's Firebase configuration
   var firebaseConfig = {
    apiKey: "AIzaSyBu0wSIDG0TwBx74rsurd_zqa_FrsqjOVM",
    authDomain: "classtest-c2c4c.firebaseapp.com",
    databaseURL: "https://classtest-c2c4c-default-rtdb.firebaseio.com",
    projectId: "classtest-c2c4c",
    storageBucket: "classtest-c2c4c.appspot.com",
    messagingSenderId: "312979928052",
    appId: "1:312979928052:web:a6ad564e964c8392447fa1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name = document.getElementById("user_name").Value;
      firebase.database().ref("/").child(user_name).update({

      });
  }