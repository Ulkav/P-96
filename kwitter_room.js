
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyBu0wSIDG0TwBx74rsurd_zqa_FrsqjOVM",
      authDomain: "classtest-c2c4c.firebaseapp.com",
      projectId: "classtest-c2c4c",
      storageBucket: "classtest-c2c4c.appspot.com",
      messagingSenderId: "312979928052",
      appId: "1:312979928052:web:a6ad564e964c8392447fa1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome"+ user_name + "!";

    function addRoom()
    {
      Room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({

      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
    }

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML})}
            Room_names = childKey;

          //Start code
console.log("Room Name - " = Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
          //End code
  getData();



  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kiwitter_page.html";
  }

  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "kwitter.html";
  }

  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
    });

    document.getElementById("msg").value = "";
  }