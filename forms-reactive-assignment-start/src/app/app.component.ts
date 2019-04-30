import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'projectName': new FormControl('Project 1', [Validators.required, this.forbiddenProjectName.bind(this)]),
      'email': new FormControl('test@example.com', [Validators.required, Validators.email]),
      'status': new FormControl('Stable', Validators.required),
    });
  }

  onSubmit(): void {
    console.log(this.signupForm);
    console.log(this.signupForm.value);
  }

  forbiddenProjectName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'Test') {
            resolve({ 'testNameNotAllowed': true });
          } else {
            resolve(null);
          }
        }, 1500);
      }
    );
    return promise;
  }
}
