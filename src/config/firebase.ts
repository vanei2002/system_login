// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDeHeB6ToscCq-StgNpy0NLC3k0KcaUJe0',
  authDomain: 'systemlogin-d160a.firebaseapp.com',
  projectId: 'systemlogin-d160a',
  storageBucket: 'systemlogin-d160a.appspot.com',
  messagingSenderId: '90274129283',
  appId: '1:90274129283:web:ef93b90509a55a886302b6',
  measurementId: 'G-8ZTMY3ZM1S',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const auth = getAuth(app)
