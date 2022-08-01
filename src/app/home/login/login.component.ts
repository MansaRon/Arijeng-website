import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    return this.router.navigateByUrl('/main-view');
  }

}
