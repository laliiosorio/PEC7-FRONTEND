import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import your AppRoutingModule
import { AppComponent } from './app.component';
import { ArticleItemComponent } from './article/article-item/article-item.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth-interceptor.interceptor';
import { LoginComponent } from './auth/login/login.component';
import { ArticleDetailComponent } from './article/article-detail/article-detail.component';
import { ArticleNewComponent } from './article/article-new/article-new.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth-guard.service';
import { AuthStoreService } from './services/auth-store.service';
@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleNewComponent,
    ArticleItemComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ArticleDetailComponent,
    DefaultImagePipe,
    CurrencyFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthStoreService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
