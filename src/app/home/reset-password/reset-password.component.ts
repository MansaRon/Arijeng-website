import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registration } from 'src/app/services/registrationServices/registration';
import { CustomvalidationService } from 'src/app/services/validationServices/customvalidation.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup = new FormGroup({
    mobileNum: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });
  submitted = false;

  constructor(private register: Registration, private router: Router, private formBuilder: FormBuilder, private match: CustomvalidationService) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      mobileNum: ['', [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.match.match('password', 'confirmPassword')
    });
  }

  get f() {
    return this.resetPasswordForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.resetPasswordForm.invalid) { return; }
  }

  onReset() {
    this.submitted = false;
    this.resetPasswordForm.reset();
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

}
