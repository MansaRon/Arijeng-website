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
  // ENUMS for changing kota order: 
  // ORDER_PLACED, ORDER_NOT_PLACED,
  // READY_FOR_COLLECTION, PAID_FOR_COLLECTION,
  // COLLECTED

  public orderPlaced(): any {
    let orderStatus = "ORDER_PLACED";
    const updateOrder: OrderUpdate = {
      description: this.data.description,
      price: this.data.price,
      quantity: this.data.quantity
    }
    //console.log(this.data.orderID);
    this.service.updateOrderStatus(this.data.orderID, updateOrder, orderStatus).subscribe({
      next: (response: Response) => {
        //console.log(response);
      }, error: (error: Error) => {
        console.log(error);
      }, complete:() => {}
    })
  }

  public orderNotPlaced(): any {
    let orderStatus = "ORDER_NOT_PLACED";
    const updateOrder: OrderUpdate = {
      description: this.data.description,
      price: this.data.price,
      quantity: this.data.quantity
    }
    //console.log(this.data.orderID);
    this.service.updateOrderStatus(this.data.orderID, updateOrder, orderStatus).subscribe({
      next: (response: Response) => {
        //console.log(response);
      }, error: (error: Error) => {
        console.log(error);
      }, complete:() => {}
    })
  }

  public readyForCollection(): any {
    let orderStatus = "READY_FOR_COLLECTION";
    const updateOrder: OrderUpdate = {
      description: this.data.description,
      price: this.data.price,
      quantity: this.data.quantity
    }
    //console.log(this.data.orderID);
    this.service.updateOrderStatus(this.data.orderID, updateOrder, orderStatus).subscribe({
      next: (response: Response) => {
        //console.log(response);
      }, error: (error: Error) => {
        console.log(error);
      }, complete:() => {}
    })
  }

  public paidForCollection(): any {
    let orderStatus = "PAID_FOR_COLLECTION";
    const updateOrder: OrderUpdate = {
      description: this.data.description,
      price: this.data.price,
      quantity: this.data.quantity
    }
    //console.log(this.data.orderID);
    this.service.updateOrderStatus(this.data.orderID, updateOrder, orderStatus).subscribe({
      next: (response: Response) => {
        //console.log(response);
      }, error: (error: Error) => {
        console.log(error);
      }, complete:() => {}
    })
  }

  public collection(): any {
    let orderStatus = "COLLECTED";
    const updateOrder: OrderUpdate = {
      description: this.data.description,
      price: this.data.price,
      quantity: this.data.quantity
    }
    //console.log(this.data.orderID);
    this.service.updateOrderStatus(this.data.orderID, updateOrder, orderStatus).subscribe({
      next: (response: Response) => {
        //console.log(response);
      }, error: (error: Error) => {
        console.log(error);
      }, complete:() => {}
    })
  }

}