import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewOrderRoutingModule } from './view-order-routing.module';
import { ViewOrderComponent } from './view-order.component';
import { MaterialModuleModule } from 'src/material-module/material-module.module';
import { FormsModule } from '@angular/forms';
import { ViewOrderDialog } from './view-order-dialog/view-order-dialog.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ViewOrderComponent,
    ViewOrderDialog
  ],
  imports: [
    CommonModule,
    ViewOrderRoutingModule,
    MaterialModuleModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ViewOrderModule { }
