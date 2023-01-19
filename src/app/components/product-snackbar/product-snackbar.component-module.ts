import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { ProductSnackbarComponent } from './product-snackbar.component';

@NgModule({
  imports: [MatListModule, CommonModule],
  declarations: [ProductSnackbarComponent],
  providers: [],
  exports: [ProductSnackbarComponent]
})
export class ProductSnackbarComponentModule {
}
