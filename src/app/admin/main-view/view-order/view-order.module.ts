import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewOrderRoutingModule } from './view-order-routing.module';
import { ViewOrderComponent } from './view-order.component';
import { MaterialModuleModule } from 'src/material-module/material-module.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewOrderComponent
  ],
  imports: [
    CommonModule,
    ViewOrderRoutingModule,
    MaterialModuleModule,
    FormsModule
  ]
})
export class ViewOrderModule { }
