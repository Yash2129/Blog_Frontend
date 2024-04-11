import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  IsLoggin: any = false; // Flag to check if the user is logged in
  roleName: string | null; // Variable to store the role name of the logged-in user

  constructor(private authService: AuthService, private router: Router) {
    // Initialize IsLoggin and roleName properties with AuthService
    this.IsLoggin = authService.getLoginStatus;
    this.roleName = authService.getRole;

    // If the user is not logged in, redirect to the homepage
    if (!this.IsLoggin) {
      this.router.navigateByUrl('/home');
    }
  }

  // Method to handle user logout
  logout() {
    // Call AuthService logout method
    this.authService.logout();
    // Reload the page to clear user session data
    window.location.reload();
  }
}
