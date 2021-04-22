import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
//firebase configuration for web app
var firebaseConfig = {
    apiKey: "AIzaSyCliwOQRfzgx-wJjY6p4SzIOYXSO_RIzzA",
    authDomain: "photogallery-2816f.firebaseapp.com",
    projectId: "photogallery-2816f",
    storageBucket: "photogallery-2816f.appspot.com",
    messagingSenderId: "785021607133",
    appId: "1:785021607133:web:df7a68e0b3b5a8d89b8f34"
  };
  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  const photoStorage=firebase.storage();
  const photoFirestore=firebase.firestore();
  const timeStamp=firebase.firestore.FieldPath.serverTimestamp;

  export{photoStorage,photoFirestore,timeStamp};