const firebaseConfig = {
  apiKey: "AIzaSyDQ6jm_9Nm9tGq5B2RpRGLwELuX6EHT-6E",
  authDomain: "heforshe-cuu.firebaseapp.com",
  projectId: "heforshe-cuu",
  storageBucket: "heforshe-cuu.firebasestorage.app",
  messagingSenderId: "414662211091",
  appId: "1:414662211091:web:e0e7ab3848c92a39ac71e6"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();