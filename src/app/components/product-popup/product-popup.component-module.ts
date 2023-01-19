import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { ProductPopupComponent } from './product-popup.component';

@NgModule({
  imports: [MatListModule, CommonModule],
  declarations: [ProductPopupComponent],
  providers: [],
  exports: [ProductPopupComponent]
})
export class ProductPopupComponentModule {
}
