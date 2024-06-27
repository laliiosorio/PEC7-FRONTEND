import { Component } from '@angular/core';
import { AuthStoreService } from '../../services/auth-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router,private authStore: AuthStoreService) { }

  isAuthenticated(): boolean {
    return this.authStore.getAuthenticationStatus();
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.authStore.setAuthenticationStatus(false);
    this.router.navigate(['/']);
  }
}
