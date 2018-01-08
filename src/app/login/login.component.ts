import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationService } from '../_services/index';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../validation/validation.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public labelBoxanimeted = false;
  // constructor() { }

  ngOnInit() {
  }
  login() {

  }
  // tslint:disable-next-line:member-ordering
  userForm: any;

  constructor(private formBuilder: FormBuilder) {
    debugger;

    this.userForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'password': ['', [Validators.required, ValidationService.passwordValidator]],
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'profile': ['', [Validators.required, Validators.minLength(10)]]
    });

    console.log(this.userForm);
  }

  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
      alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email} Password: ${this.userForm.value.password}`);
    }
  }
}
