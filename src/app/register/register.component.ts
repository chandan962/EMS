import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private userFirstname: String = '';
  private userLasttname: String = '';
  private userEmail: String = '';
  private userPassword: String = '';

  get registerform() {
    return JSON.stringify({
      name: this.userFirstname,
      Lasttname: this.userLasttname,
      Email: this.userEmail,
      Password: this.userPassword
    });
  }


  constructor() { }

  ngOnInit() {
  }

}
