import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStoreService } from '../../../auth/services/auth-store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;
  private authSubscription!: Subscription;

  constructor(private router: Router, private authStore: AuthStoreService) { }

  ngOnInit(): void {
    this.authSubscription = this.authStore.getAuthenticationStatus().subscribe(
      isAuthenticated => this.isAuthenticated = isAuthenticated
    );
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  onLogout(): void {
    this.authStore.logout();
    this.router.navigate(['/']);
  }
}
