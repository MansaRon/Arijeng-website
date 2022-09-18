import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { tap } from 'rxjs';
import { Order } from 'src/app/services/orderServices/order';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  orders: any = [];
  searchOrder: string = '';

  constructor(private adminService: Order, private router: Router, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.getAllOrders(); 
    this.spinner.show();
  }

  viewOrder(code: any) {
    //console.log(code);
    localStorage.setItem("kotaOrder", JSON.stringify(code));
    this.router.navigateByUrl('/view-order')
  }

  public getAllOrders(): void {
    console.log('Loading...');
    this.adminService.getAllOrders().subscribe({
      next:(response: Response) => {
        this.orders = response;
        console.log(this.orders);
        this.spinner.hide();
      },
      error:(error: Error) => {
        console.log(error);
      }, 
      complete:() => {}
    })
  }

}
