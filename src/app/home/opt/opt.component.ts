import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from 'src/app/models/register';
import { Registration } from 'src/app/services/registrationServices/registration';

@Component({
  selector: 'app-opt',
  templateUrl: './opt.component.html',
  styleUrls: ['./opt.component.css']
})
export class OptComponent implements OnInit {

  public profileForm!: FormGroup;
  public signUpObject!: Register;

  constructor(private register: Registration, private router: Router, private route: Router, private formgroup: FormBuilder) { }

  ngOnInit(): void {
    this.signUpObject = JSON.parse(window.localStorage.getItem("signUpObject") || '');
    console.log(this.signUpObject);
    this.profileForm = this.formgroup.group({
      otp: ['', Validators.required]
    });
  }

  public keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  public onSubmitOTPHandler() {

    this.register.confirmOTP(this.signUpObject.phone).subscribe({
      next: (opt: Response) => {
        console.log(opt);
      },
      error: (error) => {
        console.log(error);
      }, 
      complete() {},
    })

    // if (this.otpForm.value.otp === "") {
    //   this.isValidated = "OTP Field Cannot Be Empty.";
    //   this.isSuccess = false;
    // }
    // else if (this.otpForm.value.otp.length !== 4) {
    //   this.isValidated = "An OTP Must Contain 4 Digits.";
    //   this.isSuccess = false;
    // }
    // else {
    //   this.services.verifyUserMobileForOtp(this.userRegistrationData.phone, this.otpForm.value.otp)
    //     .subscribe((otpVerified: any) => {

    //       if (otpVerified.status === "AWAITING_CONFIRMATION") {
    //         this.isValidated = "Invalid OTP Provided.";
    //         this.isSuccess = false;
    //       } else if (otpVerified.status === "ACTIVE") {
    this.router.navigateByUrl('/');
    //         localStorage.setItem("user_details", JSON.stringify(otpVerified));
    //       } else {
    //         this.isValidated = "";
    //       }
    //     }, (errorCaught: HttpErrorResponse) => {
    //       console.log(errorCaught);
    //     })
    // }

  }

}
