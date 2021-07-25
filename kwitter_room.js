
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAj82OzDnmDWJmcaS3AVh7mnFVfHax3XiI",
      authDomain: "kwitter-3eb9c.firebaseapp.com",
      projectId: "kwitter-3eb9c",
      storageBucket: "kwitter-3eb9c.appspot.com",
      messagingSenderId: "206756538874",
      appId: "1:206756538874:web:4196616eb245e97eaa9c43"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
