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

  otpForm: FormGroup = new FormGroup({
    otp: new FormControl('')
  });
  submitted = false;
  public signUpObject!: Register;

  constructor(private register: Registration, private router: Router, private route: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signUpObject = JSON.parse(window.localStorage.getItem("signUpObject") || '');
    this.otpForm = this.formBuilder.group({
      otp: ['', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]]
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

    this.submitted = true;
    if (this.otpForm.invalid) { return; }

    this.register.confirmOTP(this.signUpObject.phone).subscribe({
      next: (opt: Response) => {
        console.log(opt);
      },
      error: (error) => {
        console.log(error);
      }, 
      complete:() => { this.router.navigateByUrl('/'); localStorage.removeItem("signUpObject"); }
    })

  }

  get f() { return this.otpForm.controls }

}
