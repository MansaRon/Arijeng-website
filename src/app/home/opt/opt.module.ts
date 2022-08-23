import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptRoutingModule } from './opt-routing.module';
import { OptComponent } from './opt.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Registration } from 'src/app/services/registrationServices/registration';


@NgModule({
  declarations: [
    OptComponent
  ],
  imports: [
    CommonModule,
    OptRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    Registration
  ]
})
export class OptModule { }
