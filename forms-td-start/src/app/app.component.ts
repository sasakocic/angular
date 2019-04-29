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
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;
  @ViewChild('f') signupForm: NgForm;

  suggestUserName() {
    // const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //     secret: 'pet',
    //     questionAnswer: '',
    //     gender: 'male'
    //   }
    // });
    this.signupForm.form.patchValue({
      userData: {
        username: this.suggestUserName,
      }
    });
  }

  onSubmit() {
    console.log(this.signupForm); // ng-invalid ng-valid class
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
  }
  // onSubmit(form: NgForm) {
  //   console.log(form.value); // usefulproperties: dirty, enabled, disabled, invalid, touched
  // }
}
