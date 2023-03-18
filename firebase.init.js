// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDHQrH10WwzRSZqFSQJ0GOTTvegPFQ2czc',
  authDomain: 'portfolio-website-154b7.firebaseapp.com',
  projectId: 'portfolio-website-154b7',
  storageBucket: 'portfolio-website-154b7.appspot.com',
  messagingSenderId: '1064642609830',
  appId: '1:1064642609830:web:ff59fad9cdc10caeecea67',
  measurementId: 'G-7LP8NXRFT9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
