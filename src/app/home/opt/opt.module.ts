import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptRoutingModule } from './opt-routing.module';
import { OptComponent } from './opt.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OptComponent
  ],
  imports: [
    CommonModule,
    OptRoutingModule,
    ReactiveFormsModule
  ]
})
export class OptModule { }
