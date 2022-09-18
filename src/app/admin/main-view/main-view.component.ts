import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from 'src/app/services/orderServices/order';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  orders: any = [];
  searchOrder: string = '';
  // filterForm: FormGroup = new FormGroup({
  //   searchOrder: new FormControl('')
  // });

  constructor(private adminService: Order, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.getAllOrders();
    // this.filterForm = this.formBuilder.group({
    //   searchOrder: ['', [Validators.required]]
    // });
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
      },
      error:(error: Error) => {
        console.log(error);
      }, 
      complete:() => {}
    })
  }

}
