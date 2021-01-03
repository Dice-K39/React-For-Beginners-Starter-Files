import Rebase from 're-base';
import firebase from "firebase";

const firebaseApp = firebase.initializeApp(
{
    apiKey: "AIzaSyBYpnVqtAsdZjfXkzBhS-y6hUNdxL6V1jA",
    authDomain: "catch-of-the-day-dice-k.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-dice-k-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// named export
export {firebaseApp};

//default export
export default base;