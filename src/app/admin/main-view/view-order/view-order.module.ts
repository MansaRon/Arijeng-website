import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewOrderRoutingModule } from './view-order-routing.module';
import { ViewOrderComponent } from './view-order.component';
import { MaterialModuleModule } from 'src/material-module/material-module.module';


@NgModule({
  declarations: [
    ViewOrderComponent
  ],
  imports: [
    CommonModule,
    ViewOrderRoutingModule,
    MaterialModuleModule
  ]
})
export class ViewOrderModule { }
