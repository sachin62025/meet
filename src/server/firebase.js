import firebase from "firebase/app";
import firebase from "firebase/databasebase";

var firebaseConfig = {
  apiKey: "AIzaSyALh5Zzz5jQxxLo6szf-tmIvddZMjCMtOw", // Add API Key
  databaseURL:"https://meet-bd1c1-default-rtdb.firebaseio.com/" // Add databaseURL
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

export const userName = prompt("What's your name?");
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;
