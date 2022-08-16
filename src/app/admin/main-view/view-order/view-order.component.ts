import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

  kotaOrder: any;

  constructor() { }

  ngOnInit(): void {
    this.kotaOrder = JSON.parse(localStorage.getItem("kotaOrder") || '');
    console.log(this.kotaOrder);
  }

}
