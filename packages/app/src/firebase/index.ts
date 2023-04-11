import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import * as firestore from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDnAWDBMPwz8lk_S9PVN3x3fHIr-5owogU',
  authDomain: 'recap-381618.firebaseapp.com',
  projectId: 'recap-381618',
  storageBucket: 'recap-381618.appspot.com',
  messagingSenderId: '621133214709',
  appId: '1:621133214709:web:0997fded663aea018b26bc',
  measurementId: 'G-8TLE4LW72Z'
}

// Initialize Firebase
const firebase = initializeApp(firebaseConfig)
const analytics = getAnalytics(firebase)

export const db = getFirestore(firebase)
export const auth = getAuth(firebase)
export const storage = getStorage(firebase)

export const { collection, doc, getDoc, getDocs, where, collectionGroup, query } = firestore
