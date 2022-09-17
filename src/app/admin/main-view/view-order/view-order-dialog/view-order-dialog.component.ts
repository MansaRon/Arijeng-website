import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { OrderUpdate } from 'src/app/models/order-update';
import { Order } from "src/app/services/orderServices/order";

@Component({
  selector: 'app-view-order-dialog',
  templateUrl: './view-order-dialog.component.html',
})
export class ViewOrderDialog implements OnInit {

  order_status: any;
  constructor(public dialogRef: MatDialogRef<ViewOrderDialog>, public order: Order,
    @Inject(MAT_DIALOG_DATA) public data: {
      orderID: string,
      description: string,
      price: number,
      quantity: number
    }, public service: Order ) { }

  ngOnInit(): void {}
  // ENUMS for changing kota order: ORDER_PLACED, NOT_PLACED, READY_FOR_COLLECTION

  public orderPlaced(): any {
    const updateOrder: OrderUpdate = {
      description: this.data.description,
      price: this.data.price,
      quantity: this.data.quantity
    }
    console.log(this.data.orderID);
    this.service.updateOrderStatus(this.data.orderID, updateOrder).subscribe({
      next: (response: Response) => {

      }, error: (error: Error) => {

      }, complete:() => {}
    })
  }

  public orderNotPlaced(): any {
    const updateOrder: OrderUpdate = {
      description: this.data.description,
      price: this.data.price,
      quantity: this.data.quantity
    }
    console.log(updateOrder);
    this.service.updateOrderStatus(this.data.orderID, updateOrder).subscribe({
      next: (response: Response) => {

      }, error: (error: Error) => {

      }, complete:() => {}
    })
  }

  public readyForCollection(): any {
    const updateOrder: OrderUpdate = {
      description: this.data.description,
      price: this.data.price,
      quantity: this.data.quantity
    }
    console.log(updateOrder);
    this.service.updateOrderStatus(this.data.orderID, updateOrder).subscribe({
      next: (response: Response) => {

      }, error: (error: Error) => {

      }, complete:() => {}
    })
  }

}