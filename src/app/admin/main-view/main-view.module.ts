import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewRoutingModule } from './main-view-routing.module';
import { MainViewComponent } from './main-view.component';
import { OrdersComponent } from './orders/orders.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModuleModule } from 'src/material-module/material-module.module';
import { HttpClientModule } from '@angular/common/http';
import { OrderfilterPipe } from 'src/app/pipes/orderfilter.pipe';

@NgModule({
  declarations: [
    MainViewComponent, 
    // OrdersComponent,
    SidebarComponent,
    OrderfilterPipe
  ],
  imports: [
    CommonModule,
    MainViewRoutingModule,
    MatSliderModule,
    ReactiveFormsModule,
    // MatTableModule,
    MaterialModuleModule,
    HttpClientModule,
    FormsModule
  ]
})
export class MainViewModule { }
