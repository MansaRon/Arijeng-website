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
  
  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.kotaOrder = JSON.parse(localStorage.getItem("kotaOrder") || '');
    console.log(this.kotaOrder);
    this.kotaOrder.orders.forEach((element: any) => {
      this.totalPrice += element.price;
    });
  }

  openDialog(event: any): void {
    console.log(event);
    this.dialog.open(ViewOrderDialog, {
      width: '250px',
      data: {
        branchCode: event.branchCode,
        description: event.description,
        image: event.image,
        itemName: event.itemName,
        orderNo: event.orderNo,
        price: event.price,
        quantity: event.quantity
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

  // ENUMS for changing kota order: ORDER_PLACED, NOT_PLACED, READY_FOR_COLLECTION

}

