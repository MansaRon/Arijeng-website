import { InjectFlags } from "@angular/compiler/src/core";
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
      branchCode: string,
      description: string,
      image: string,
      itemName: string,
      orderNo: string,
      price: number,
      quantity: number
    } ) { }

  ngOnInit(): void {}

  public orderPlaced(): any {
    console.log(this.data.branchCode);
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