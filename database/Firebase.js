import React, { Component } from 'react';
import * as firebase from "firebase";
import "firebase/firestore";

//const Firebase = require('firebase');

const firebaseConfig = {
        apiKey: "AIzaSyA-3vaV9v0Yz2sKObtCJw6ErRaXrU7e9H8",
        authDomain: "travelgo-248207.firebaseapp.com",
        databaseURL: "https://travelgo-248207.firebaseio.com",
        projectId: "trvelgo-248207",
        storageBucket: "travelgo-248207.appspot.com",
        messagingSenderId: "915334841704",
        appId: "1:915334841704:android:345a8604f2dc7ea7"
      };

export default class Firebase extends Component {

    static auth;
    static registrationInfo = {
        name: '',
        email: '',
    }


    static writeUserData(email, name) {
        //get the current user
        var user = firebase.auth().currentUser

        //enter the users data into the database
        firebase.database().ref('Users/' + user.uid).set({
            name: name,
            email: email,

        }).then((data) => {
            //success callback 
            console.log('data', data)
            alert('Account is created!');
        }).catch((error) => {
            //error callback
            console.log('error', error);
            alert(error);
        })
    }

    static readUserData() {
        var user = firebase.auth().currentUser
        firebase.database().ref('Users/' + user.uid).once('value', function (snapshot) {
            console.log(snapshot.val())
        });
    }

    static updateEmail(email) {
        var user = firebase.auth().currentUser

        firebase.database().ref('Users/'+ user.uid).update({
            email,
        });
    }

    // Initialize Firebase
    static init() {
        firebase.initializeApp(firebaseConfig);
        Firebase.auth = firebase.auth();
        Firebase.firestore = firebase.firestore();
        Firebase.storage = firebase.storage();
    }


}