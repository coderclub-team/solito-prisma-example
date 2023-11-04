import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { Firebase } from './types'
import * as firebase from 'firebase/auth'

const getIsSignedIn: Firebase['getIsSignedIn'] = () =>
  Boolean(auth().currentUser)

const signOut: Firebase['signOut'] = () => auth().signOut()

const signInAnonymously: Firebase['signInAnonymously'] = async () => {
  return (await auth().signInAnonymously()).user
}

const onAuthStateChanged: Firebase['onAuthStateChanged'] = (callback) => {
  return auth().onAuthStateChanged(callback)
}

const getCurrentUser: Firebase['getCurrentUser'] = () => auth().currentUser
const singinWithCredential: Firebase['singinWithCredential'] = async (credential:FirebaseAuthTypes.AuthCredential)=>{
  return (await auth().signInWithCredential(credential)).user


}
const signInWithEmailAndPassword: Firebase['signInWithEmailAndPasswordFirebase'] = async (email:string,password:string)=>{
    return (await auth().signInWithEmailAndPassword(email,password)).user
}

export {
  getIsSignedIn,
  signOut,
  signInAnonymously,
  onAuthStateChanged,
  getCurrentUser,
  singinWithCredential,
  signInWithEmailAndPassword
}