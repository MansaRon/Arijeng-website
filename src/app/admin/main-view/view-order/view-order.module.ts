import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewOrderRoutingModule } from './view-order-routing.module';
import { ViewOrderComponent } from './view-order.component';


@NgModule({
  declarations: [
    ViewOrderComponent
  ],
  imports: [
    CommonModule,
    ViewOrderRoutingModule
  ]
})
export class ViewOrderModule { }
