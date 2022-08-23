import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registration } from 'src/app/services/registrationServices/registration';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userEmail: string = '';
  emailValidate: string = '';

  userPassword: string = '';
  passwordValidate: string = '';

  loginMsg: string = '';

  constructor(private router: Router, private register: Registration) { }

  ngOnInit(): void {
  }

  login() {
    return this.router.navigateByUrl('/main-view');
  }

}
