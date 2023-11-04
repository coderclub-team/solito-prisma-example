// please note that firebase auth adds about 30kb to your bundle size on Web
import { initializeApp } from 'firebase/app'
import {
  initializeAuth,
  browserPopupRedirectResolver,
  browserLocalPersistence,
  signInAnonymously as signInAnonymouslyFirebase,
  onAuthStateChanged as onAuthStateChangedFirebase,
  signInWithCredential as signInWithCredentialFirebase,
  signInWithEmailAndPassword as signInWithEmailAndPasswordFirebase,
} from 'firebase/auth'
import { Firebase } from './types'
import * as firebase from 'firebase/auth'
let auth: ReturnType<typeof initializeAuth>

if (typeof window !== 'undefined') {
  const firebaseApp = initializeApp({
    apiKey: "AIzaSyDaUQsAYDiiCfLiebk3i8gVAaVs06p6L1E",
    authDomain: "solito-daily.firebaseapp.com",
    projectId: "solito-daily",
    storageBucket: "solito-daily.appspot.com",
    messagingSenderId: "977215011881",
    appId: "1:977215011881:web:e3442d3ed546552e90f038"
  })

  auth = initializeAuth(firebaseApp, {
    persistence: browserLocalPersistence,
  })
}

const getIsSignedIn: Firebase['getIsSignedIn'] = () =>
  Boolean(auth?.currentUser)

const signOut: Firebase['signOut'] = () => auth.signOut()

const signInAnonymously: Firebase['signInAnonymously'] = async () => {
  return (await signInAnonymouslyFirebase(auth)).user
}

const singinWithCredential: Firebase['singinWithCredential'] = async (credential:firebase.AuthCredential)=>{
   return (await signInWithCredentialFirebase(auth, credential)).user
}
const signInWithEmailAndPassword: Firebase['signInWithEmailAndPasswordFirebase'] = async (email:string,password:string)=>{
    return (await signInWithEmailAndPasswordFirebase(auth,email,password)).user
}

const onAuthStateChanged: Firebase['onAuthStateChanged'] = (callback) => {
  return onAuthStateChangedFirebase(auth, callback)
}

const getCurrentUser: Firebase['getCurrentUser'] = () => auth.currentUser

export {
  getIsSignedIn,
  signInAnonymously,
  signOut,
  onAuthStateChanged,
  getCurrentUser,
  singinWithCredential,
  signInWithEmailAndPassword
}