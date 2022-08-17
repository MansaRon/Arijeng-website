import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

  kotaOrder: any;
  pickUpName!: string;
  pickUpEmail!: string;
  pickUpAddress!: string;
  pickUpNumber!: string;
  dropOffName!: string;
  dropOffAddress!: string;
  dropOffNumber!: string;
  


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.kotaOrder = JSON.parse(localStorage.getItem("kotaOrder") || '');
    console.log(this.kotaOrder);
  }

  public goBackHome(): void {
    localStorage.removeItem("kotaOrder");
    this.router.navigateByUrl('/main-view');
  }

}
