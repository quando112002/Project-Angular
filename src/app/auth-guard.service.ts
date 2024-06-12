import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenService } from './authen.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthenService, public router: Router) {}

  canActivate(): boolean {
    if (!this.auth.getToken()) { // Kiểm tra xem token đã được đặt hay chưa
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
