import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  answer = '';
  defaultQuestion = 'pet';
  genders = ['male', 'female'];
  @ViewChild('f') signupForm: NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit() {
    console.log(this.signupForm); // ng-invalid ng-valid class
  }
  // onSubmit(form: NgForm) {
  //   console.log(form.value); // usefulproperties: dirty, enabled, disabled, invalid, touched
  // }
}
