import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyDVS8SSorSiFy7pWmp1wfPVwTBKoSoqvPU',
  authDomain: 'fir-8fd40.firebaseapp.com',
  projectId: 'fir-8fd40',
  storageBucket: 'fir-8fd40.appspot.com',
  messagingSenderId: '421130602218',
  appId: '1:421130602218:web:1df12f46d83680196bb993',
}

const app = initializeApp(firebaseConfig)
const db = app.fireStore()
const auth = app.auth()

export { db, auth }
