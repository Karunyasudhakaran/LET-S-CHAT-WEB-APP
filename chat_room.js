const firebaseConfig = {
    apiKey: "AIzaSyALb6R_fTff9o57HB9tdKLnEXfdu1f16nc",
    authDomain: "letschat-app-31d7e.firebaseapp.com",
    databaseURL: "https://letschat-app-31d7e-default-rtdb.firebaseio.com",
    projectId: "letschat-app-31d7e",
    storageBucket: "letschat-app-31d7e.appspot.com",
    messagingSenderId: "790219683171",
    appId: "1:790219683171:web:deb40cd0c13e14d7e84f56"
  }; 
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
     console.log("Room_Name - " + Room_names);
     row = "<div class = 'room_name' id = " + Room_names + "onclick'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
     document.getElementById("output").innerHTML += row;       
    //End code
    });});}
getData();

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "chat_room.html"
}
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location= "chat_page.html"
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name")
    window.location= "index.html";
}