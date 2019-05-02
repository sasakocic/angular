import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  loadedFeature = "recipe";

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyCvckLTDnDH9NkiPKTTXqT9OAhvFFY0V0Y",
      authDomain: "ng-recipe-book-aa489.firebaseio.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
