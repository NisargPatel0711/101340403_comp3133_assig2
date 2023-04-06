import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public router: Router) {}

  logOut () {
    localStorage.removeItem("employee-system")
    sessionStorage.removeItem("employee-system")
    this.router.navigate(["/login"])
  }
}
