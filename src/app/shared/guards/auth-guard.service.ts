import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthStoreService } from '../../auth/services/auth-store.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authStore: AuthStoreService) { }

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authStore.getAuthenticationStatus()) {
      return true;
    }

    this.router.navigate(['auth/login']);
    return false;
  }
}
