import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CartDetailsComponent } from './cart-details.component';

@NgModule({
  imports: [MatCardModule, CommonModule, MatListModule],
  declarations: [CartDetailsComponent],
  providers: [],
  exports: [CartDetailsComponent]
})
export class CartDetailsComponentModule {
}
