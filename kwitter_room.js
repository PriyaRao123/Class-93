var firebaseConfig = {
      apiKey: "AIzaSyAcBZ7e5qqD85J1fd9acTnz5QEoWCK79L4",
      authDomain: "kwitter-526ef.firebaseapp.com",
      databaseURL: "https://kwitter-526ef-default-rtdb.firebaseio.com",
      projectId: "kwitter-526ef",
      storageBucket: "kwitter-526ef.appspot.com",
      messagingSenderId: "399857433784",
      appId: "1:399857433784:web:edeeb6045394e04519c84d"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + " !";

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding Room Name "
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
} 


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";

      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

