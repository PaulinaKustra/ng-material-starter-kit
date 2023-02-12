import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { ProductPriceComponent } from './product-price.component';

@NgModule({
  imports: [MatCardModule, MatListModule, FlexModule, CommonModule],
  declarations: [ProductPriceComponent],
  providers: [],
  exports: [ProductPriceComponent]
})
export class ProductPriceComponentModule {
}
