import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthStoreService } from './auth/services/auth-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private authStore: AuthStoreService) {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        console.log('NavigationEnd event:', evt);
        if (evt.url === '/') {
          console.log('Handling login route');
          // Override the route reuse strategy
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          // Trick the Router into believing it's last link wasn't previously loaded
          this.router.navigated = false;
          // Scroll back to top if needed
          window.scrollTo(0, 0);
        }
      }
    });
  }
}
