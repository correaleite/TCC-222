import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor() {}
}
const firebaseConfig = {
  apiKey: "AIzaSyCKPZFalNcLc5EZfbYiAdVylAadFpfm6MI",
  authDomain: "sitetccfiap.firebaseapp.com",
  projectId: "sitetccfiap",
  storageBucket: "sitetccfiap.firebasestorage.app",
  messagingSenderId: "1038045659891",
  appId: "1:1038045659891:web:8fc6fcd7b4220f6e656d86",
  measurementId: "G-VT0MNHDSQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);