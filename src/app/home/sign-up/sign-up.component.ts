import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  userName: string = '';
  userSurname: string = '';
  userEmail: string = '';
  userMobile: string = '';
  userPassword: string = '';

  userNameValidate: string = '';
  userSurnameValidate: string = '';
  userEmailValidate: string = '';
  userMobileValidate: string = '';
  userPasswordValidate: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {}

  login(): void {this.router.navigateByUrl('/');}

  register(): void {this.router.navigateByUrl('/otp');}

}
