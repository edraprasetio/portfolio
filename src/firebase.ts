// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCthiOooAG5M74mQsnyD6pLwnJXGRBHuec',
    authDomain: 'edra-portfolio.firebaseapp.com',
    projectId: 'edra-portfolio',
    storageBucket: 'edra-portfolio.firebasestorage.app',
    messagingSenderId: '299598380343',
    appId: '1:299598380343:web:226a0fbbb4f246a25f6eb2',
    measurementId: 'G-JZYP4WQ7ST',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
