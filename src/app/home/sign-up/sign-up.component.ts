import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from "src/app/models/register";
import { Registration } from 'src/app/services/registrationServices/registration';
import { CustomvalidationService } from 'src/app/services/validationServices/customvalidation.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    mobileNum: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;

  constructor(private register: Registration, private router: Router, private formBuilder: FormBuilder, private match: CustomvalidationService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      mobileNum: ['', Validators.required, Validators.minLength(10), Validators.maxLength(10)],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validator: this.match.match('password', 'confirmPassword')
    });
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) { return; }

    const registerBody = {
      "firstName": this.registerForm.value.firstName,
      "lastName": this.registerForm.value.lastName,
      "email": this.registerForm.value.email,
      "phone": this.registerForm.value.mobileNum,
      "pwd": this.registerForm.value.password
    }

    this.register.registerUser(registerBody).subscribe({
      next: (registerResponse: Register) => {
        this.router.navigateByUrl('/otp');
        sessionStorage.setItem("signUpObject", JSON.stringify(registerResponse));
      }, 
      error:(error: HttpErrorResponse) => {
        console.log(error);
      }, 
      complete: () => {
        this.onReset();
      },
    });

  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  login(): void { this.router.navigateByUrl('/'); }

}
