    import * as firebase from 'firebase/app';
    import 'firebase/storage';
    import 'firebase/firestore';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAHKBSpQgg_aFMqY4v8pw3-0GeyDpKz5bw",
    authDomain: "tititof-firegram.firebaseapp.com",
    databaseURL: "https://tititof-firegram.firebaseio.com",
    projectId: "tititof-firegram",
    storageBucket: "tititof-firegram.appspot.com",
    messagingSenderId: "502480163311",
    appId: "1:502480163311:web:c5177f21b41de4c392661a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export{ projectStorage, projectFirestore, timestamp };
