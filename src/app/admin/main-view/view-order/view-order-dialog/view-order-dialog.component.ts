import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { OrderUpdate } from 'src/app/models/order-update';
import { Order } from "src/app/services/orderServices/order";

@Component({
  selector: 'app-view-order-dialog',
  templateUrl: './view-order-dialog.component.html',
})
export class ViewOrderDialog implements OnInit {

  order_status: any;
  constructor(public dialogRef: MatDialogRef<ViewOrderDialog>, public order: Order) { }

  ngOnInit(): void {}

  public orderPlaced(): any {
    const updateOrder: OrderUpdate = {
      description: '',
      price: '',
      quantity: 0
    }
  }

  public orderNotPlaced(): any {
    const updateOrder: OrderUpdate = {
      description: '',
      price: '',
      quantity: 0
    }
  }

  public readyForCollection(): any {
    const updateOrder: OrderUpdate = {
      description: '',
      price: '',
      quantity: 0
    }
  }

}