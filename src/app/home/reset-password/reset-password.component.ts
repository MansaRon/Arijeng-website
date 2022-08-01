import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  userEmail: string = '';
  emailValidate: string = '';

  userPassword: string = '';
  checkPassword: string = '';

  validatePassword: string = '';

  loginMsg: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public submitNewPassword(): void {
    this.router.navigateByUrl('/');
  }

}
