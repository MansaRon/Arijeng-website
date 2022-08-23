import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
      // dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      email: ['', [Validators.required, Validators.email]],
      mobileNum: ['', Validators.required, Validators.minLength(10), Validators.maxLength(10)],
      password: ['', [Validators.required, Validators.minLength(6), Validators.minLength(20)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validator: this.match.match('password', 'confirmPassword')
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) { return; }

    console.log(this.registerForm.value);

    const registerBody = {
      "firstName": this.registerForm.value.firstName,
      "lastName": this.registerForm.value.lastName,
      "email": this.registerForm.value.email,
      "phone": this.registerForm.value.mobileNum,
      // "code": "string",
      "pwd": this.registerForm.value.password
    }

    // display form values on success
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

    this.register.registerUser(registerBody).subscribe({
      next: (registerResponse: Registration) => {
        console.log(registerResponse);
        this.router.navigateByUrl('/otp');
        console.log(this.registerForm.value);
        localStorage.setItem("signUpObject", JSON.stringify(registerResponse));
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
