import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/authService.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceGuard implements CanActivate, CanActivateChild {

  constructor(public auth: AuthService, public router: Router){}

  canActivateChild(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (!this.auth.isAuthenticated()) {
      console.log('bye');
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.auth.isAuthenticated()) {
      console.log('bye');
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
  
}
