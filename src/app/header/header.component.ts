import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.checkLoggedIn();
  }

  public checkLoggedIn(): void {
    if (localStorage.getItem('token') !== null) {
      this.isLoggedIn = true;
    }
  }

  public logIn(): Promise<boolean> {
    return this.route.navigateByUrl('/');
  }

  public logOut(): void {
    this.isLoggedIn = false;
    sessionStorage.removeItem('loginObj');
    localStorage.removeItem('token');
    this.route.navigateByUrl('/');
  }

}
