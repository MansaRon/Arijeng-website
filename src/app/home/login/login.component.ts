import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registration } from 'src/app/services/registrationServices/registration';
import { Login } from "src/app/models/login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    mobileNum: new FormControl(''),
    password: new FormControl('')
  });
  submitted = false;

  constructor(private login: Registration, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      mobileNum: ['', Validators.required, Validators.minLength(10), Validators.maxLength(10)],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    });
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  get f() { return this.loginForm.controls }

  onLoginSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) { return; }

    const loginBody = {
      "phone": this.loginForm.value.mobileNum,
      "pwd": this.loginForm.value.password
    }

    this.login.loginUser(loginBody).subscribe({
      next: (response: Login) => {
        console.log(response);
      },
      error: (error: Error) => {
        console.log(error);
      }, 
      complete:() => { this.router.navigateByUrl('/main-view') },
    })
  }

  onReset() {this.submitted = false;this.loginForm.reset();}

}
