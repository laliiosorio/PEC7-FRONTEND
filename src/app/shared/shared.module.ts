import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { CommonModule } from '@angular/common';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    DefaultImagePipe,
    CurrencyFormatPipe,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    DefaultImagePipe,
    CurrencyFormatPipe,
    NavbarComponent,
    RouterModule,
  ],
})
export class SharedModule { }
