import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyDM3zpNkfeSAKF2lKhq0DTdCoKb2b8rM6c",
    authDomain: "inventorymanagementsyste-5bb02.firebaseapp.com",
    projectId: "inventorymanagementsyste-5bb02",
    storageBucket: "inventorymanagementsyste-5bb02.appspot.com",
    messagingSenderId: "814000413310",
    appId: "1:814000413310:web:3a441bed68a1abd93fd62f",
    measurementId: "G-L05JXNWHDN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  export { auth };
  export default db;