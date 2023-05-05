// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}



