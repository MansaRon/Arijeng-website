import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { NgxSpinnerService } from "ngx-spinner";
import { OrderUpdate } from 'src/app/models/order-update';
import { Order } from "src/app/services/orderServices/order";

@Component({
  selector: 'app-view-order-dialog',
  templateUrl: './view-order-dialog.component.html',
})
export class ViewOrderDialog implements OnInit {

  order_status_success: string = '';
  order_status_failure: string = '';
  constructor(public dialogRef: MatDialogRef<ViewOrderDialog>, public order: Order,
    @Inject(MAT_DIALOG_DATA) public data: {
      orderID: string,
      description: string,
      price: number,
      quantity: number
    }, public service: Order, private spinner: NgxSpinnerService) { }

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
    this.spinner.show();
    this.service.updateOrderStatus(this.data.orderID, updateOrder, orderStatus).subscribe({
      next: (response: Response) => {
        console.log(response);
      }, error: (error) => {
        console.log(error);
        this.order_status_failure = error.error.errors[0];
        this.spinner.hide();
      }, complete:() => {this.spinner.hide(); this.order_status_success = 'Order status changed.'}
    })
  }

  public orderNotPlaced(): any {
    let orderStatus = "ORDER_NOT_PLACED";
    const updateOrder: OrderUpdate = {
      description: this.data.description,
      price: this.data.price,
      quantity: this.data.quantity
    }
    this.spinner.show();
    this.service.updateOrderStatus(this.data.orderID, updateOrder, orderStatus).subscribe({
      next: (response: Response) => {
        console.log(response);
      }, error: (error) => {
        console.log(error);
        this.order_status_failure = error.error.errors[0];
        this.spinner.hide();
      }, complete:() => {this.spinner.hide(); this.order_status_success = 'Order status changed.'}
    })
  }

  public readyForCollection(): any {
    let orderStatus = "READY_FOR_COLLECTION";
    const updateOrder: OrderUpdate = {
      description: this.data.description,
      price: this.data.price,
      quantity: this.data.quantity
    }
    this.spinner.show();
    this.service.updateOrderStatus(this.data.orderID, updateOrder, orderStatus).subscribe({
      next: (response: Response) => {
      }, error: (error) => {
        console.log(error);
        this.order_status_failure = error.error.errors[0];
        this.spinner.hide();
      }, complete:() => {this.spinner.hide(); this.order_status_success = 'Order status changed.'}
    })
  }

  public paidForCollection(): any {
    let orderStatus = "PAID_FOR_COLLECTION";
    const updateOrder: OrderUpdate = {
      description: this.data.description,
      price: this.data.price,
      quantity: this.data.quantity
    }
    this.spinner.show();
    this.service.updateOrderStatus(this.data.orderID, updateOrder, orderStatus).subscribe({
      next: (response: Response) => {
      }, error: (error) => {
        console.log(error);
        this.order_status_failure = error.error.errors[0];
        this.spinner.hide();
      }, complete:() => {this.spinner.hide(); this.order_status_success = 'Order status changed.'}
    })
  }

  public collection(): any {
    let orderStatus = "COLLECTED";
    const updateOrder: OrderUpdate = {
      description: this.data.description,
      price: this.data.price,
      quantity: this.data.quantity
    }
    this.spinner.show();
    this.service.updateOrderStatus(this.data.orderID, updateOrder, orderStatus).subscribe({
      next: (response: Response) => {
      }, error: (error) => {
        console.log(error);
        this.order_status_failure = error.error.errors[0];
        this.spinner.hide();
      }, complete:() => {this.spinner.hide(); this.order_status_success = 'Order status changed.'}
    })
  }

}