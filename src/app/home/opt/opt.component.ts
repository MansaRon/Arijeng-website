import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opt',
  templateUrl: './opt.component.html',
  styleUrls: ['./opt.component.css']
})
export class OptComponent implements OnInit {

  public profileForm!: FormGroup;

  constructor(private router: Router, private route: Router, private formgroup: FormBuilder) { }

  ngOnInit(): void {
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
