import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Registration } from 'src/app/services/registrationServices/registration';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/app/auth/authService.component';
import { AuthGuardServiceGuard } from 'src/app/guards/auth-guard-service.guard';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [
    Registration,
    AuthGuardServiceGuard, 
    AuthService
  ]
})
export class LoginModule { }
