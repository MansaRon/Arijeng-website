import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject, takeUntil } from 'rxjs';
import { Order } from 'src/app/services/orderServices/order';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit, OnDestroy {

  orders: any = [];
  searchOrder: string = '';
  destroy$: Subject<boolean> = new Subject<boolean>();
  token: string | null = '';
  
  constructor(private adminService: Order, private router: Router, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.getAllOrders(); 
    this.spinner.show();
    this.token = localStorage.getItem('token');
    console.log(this.token);
  }
 
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  viewOrder(code: any) {
    localStorage.setItem("kotaOrder", JSON.stringify(code));
    this.router.navigateByUrl('/view-order')
  }

  public getAllOrders(): void {
    this.adminService.getAllOrders(this.token).pipe(takeUntil(this.destroy$)).subscribe({
      next:(response: Response) => {
        this.orders = response;
        this.spinner.hide();
      },
      error:(error: Error) => {
        console.log(error);
      }, 
      complete:() => {}
    })
  }

}
