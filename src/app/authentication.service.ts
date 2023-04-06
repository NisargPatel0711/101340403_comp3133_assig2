import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}
  isAuthenticated() {
    const currentUser =
      JSON.parse(localStorage.getItem('employee-system')!) ||
      JSON.parse(sessionStorage.getItem('employee-system')!);
    if (currentUser) {
      // User is logged in
      return true;
    }
    return false;
  }
}
