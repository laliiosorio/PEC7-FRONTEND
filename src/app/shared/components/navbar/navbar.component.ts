import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStoreService } from '../../../auth/services/auth-store.service';

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

