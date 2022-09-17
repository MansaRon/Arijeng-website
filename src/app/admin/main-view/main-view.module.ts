import { NgModule, AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewRoutingModule } from './main-view-routing.module';
import { MainViewComponent } from './main-view.component';
import { OrdersComponent } from './orders/orders.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MaterialModuleModule } from 'src/material-module/material-module.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MainViewComponent, 
    // OrdersComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MainViewRoutingModule,
    MatSliderModule,
    ReactiveFormsModule,
    // MatTableModule,
    MaterialModuleModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainViewModule { }
