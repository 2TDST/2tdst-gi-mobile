import firebase from "firebase";
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBFOlHxRoFKUnfZ4li5A_9ISnKlO8Ow_yc",

    authDomain: "gs-slashi-foods.firebaseapp.com",

    databaseURL: "https://gs-slashi-foods-default-rtdb.firebaseio.com",

    projectId: "gs-slashi-foods",

    storageBucket: "gs-slashi-foods.appspot.com",

    messagingSenderId: "56404717985",

    appId: "1:56404717985:web:59428ea271205f036b1be0"

};

firebase.initializeApp(firebaseConfig)

export { firebase }