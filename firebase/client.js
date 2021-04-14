import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDLVCbsFHNIwFu38e_Xfha31gYiG42Oed0",
    authDomain: "twitter-j4vier.firebaseapp.com",
    projectId: "twitter-j4vier",
    storageBucket: "twitter-j4vier.appspot.com",
    messagingSenderId: "714442013202",
    appId: "1:714442013202:web:1998abbd8fc30d75ec76cb",
    measurementId: "G-3E04SLPGC0"
  };

!firebase.apps.length &&
  firebase.initializeApp(firebaseConfig)

const mapUserFromFirebaseAuthToUser = (user) => {
    console.log(user)
  const {displayName, email, photoURL } = user

  return {
    avatar: photoURL,
    username: displayName,
    email
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase
    .auth()
    .onAuthStateChanged(user => {
      const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null
      
      onChange(normalizedUser)
    })
}

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase
    .auth()
    .signInWithPopup(githubProvider)
}