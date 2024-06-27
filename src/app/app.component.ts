import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStoreService } from './services/auth-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private authStore: AuthStoreService) {
    // Verificar el estado de autenticación al cargar la aplicación 
    if (!this.authStore.getAuthenticationStatus()) {
      // Si no está autenticado, redirigir al componente de login
      this.router.navigate(['/login']);
    }
  }
}
