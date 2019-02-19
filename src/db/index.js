import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDjNax90Y0_UxUBU2yIB61eQI8eLHHFBDk",
    authDomain: "estatments-vue.firebaseapp.com",
    databaseURL: "https://estatments-vue.firebaseio.com",
    projectId: "estatments-vue",
    storageBucket: "estatments-vue.appspot.com",
    messagingSenderId: "237402132417"
};

firebase.initializeApp(config)
const db = firebase.firestore()

export default db