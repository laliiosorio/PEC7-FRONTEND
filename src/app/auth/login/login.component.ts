import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AuthStoreService } from '../../services/auth-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private authStore: AuthStoreService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe(
        response => {

          // Handle successful login
          console.log('User login', response);

          localStorage.setItem('authToken', response.token);
          this.authStore.setAuthenticationStatus(true);
          this.router.navigate(['/']);
        },
        error => {
          // Handle login error
          console.error('Login error', error);
        }
      );
    }
  }
}
