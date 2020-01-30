import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCJJ9sW0Pc2Xqn6Pk4Zy98_e_Qib1sJTRc",
    authDomain: "crwn-db-c9147.firebaseapp.com",
    databaseURL: "https://crwn-db-c9147.firebaseio.com",
    projectId: "crwn-db-c9147",
    storageBucket: "crwn-db-c9147.appspot.com",
    messagingSenderId: "975293234609",
    appId: "1:975293234609:web:111f52794b125cb52cd190",
    measurementId: "G-4MM16SH3X1"
}


firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;