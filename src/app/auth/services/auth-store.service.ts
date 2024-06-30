import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthStoreService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());

  private hasToken(): boolean {
    return !!localStorage.getItem('authToken');
  }

  getAuthenticationStatus(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  setAuthenticationStatus(isAuthenticated: boolean): void {
    this.isAuthenticatedSubject.next(isAuthenticated);
  }

  login(token: string): void {
    localStorage.setItem('authToken', token);
    this.setAuthenticationStatus(true);
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.setAuthenticationStatus(false);
  }
}
