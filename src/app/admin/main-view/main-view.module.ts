import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainViewRoutingModule } from './main-view-routing.module';
import { MainViewComponent } from './main-view.component';
import { OrdersComponent } from './orders/orders.component';
import { SidebarComponent } from '../sidebar/sidebar.component';


@NgModule({
  declarations: [
    MainViewComponent, 
    OrdersComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MainViewRoutingModule
  ]
})
export class MainViewModule { }
