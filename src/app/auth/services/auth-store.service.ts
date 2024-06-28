import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthStoreService {
  private isAuthenticated = false;
  token = localStorage.getItem('authToken');
  
  constructor() {
    this.isAuthenticated = !!this.token;
  }
  
  setAuthenticationStatus(status: boolean): void {
    this.isAuthenticated = status;
  }

  getAuthenticationStatus(): boolean {
    return this.isAuthenticated;
  }
}
