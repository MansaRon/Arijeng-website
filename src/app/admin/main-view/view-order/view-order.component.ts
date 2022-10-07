import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ViewOrderDialog } from './view-order-dialog/view-order-dialog.component';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

  kotaOrder: any;
  panelOpenState = false;
  totalPrice: number = 0;
  kotaOrderStatus: string = '';
  
  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.kotaOrder = JSON.parse(localStorage.getItem("kotaOrder") || '');
    // This expression removes all the characters specified inside the string
    this.kotaOrderStatus = this.kotaOrder.status.replace(/_/g, ' ');
    this.kotaOrder.orders.forEach((element: any) => {
      this.totalPrice += element.price;
    });
  }

  openDialog(event: any): void {
    this.dialog.open(ViewOrderDialog, {
      width: '250px',
      data: {
        orderID: this.kotaOrder.id,
        description: event.description,
        price: event.price,
        quantity: event.quantity,
        status: event.status
      }
    });

    this.dialog.afterAllClosed.subscribe(
      result => {
        console.log('Im closed now.');
      }
    )
  }

  public goBackHome(): void {
    localStorage.removeItem("kotaOrder");
    this.router.navigateByUrl('/main-view');
  }

  // ENUMS for changing kota order: ORDER_PLACED,ORDER_NOT_PLACED,
  // READY_FOR_COLLECTION,PAID_FOR_COLLECTION,
  // COLLECTED

}

