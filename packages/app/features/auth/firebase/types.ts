import { FirebaseAuthTypes } from '@react-native-firebase/auth'
import * as firebase from 'firebase/auth'


type User = Pick<firebase.User, 'uid'>

export type Firebase = {
  getIsSignedIn: () => boolean
  signInAnonymously: () => Promise<User>
  singinWithCredential: (credential: firebase.AuthCredential| FirebaseAuthTypes.AuthCredential) => Promise<User>
  signOut: () => Promise<void>
  onAuthStateChanged: (
    callback: (user: { uid: string } | null) => void
  ) => () => void
  getCurrentUser: () => User | null,
  signInWithEmailAndPasswordFirebase: (email:string,password:string)=>Promise<User>
}

