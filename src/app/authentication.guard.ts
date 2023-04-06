import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthenticationService) {}

  canActivate() {
    const isAuthenticated = this.authService.isAuthenticated();
    if (isAuthenticated) {
      // User is logged in
      return true;
    }

    // User is not logged in, redirect to login page
    this.router.navigate(['/login']);
    return false;
  }
  
}
