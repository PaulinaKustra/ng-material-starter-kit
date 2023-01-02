import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ProductCategoriesComponent } from './product-categories.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule],
  declarations: [ProductCategoriesComponent],
  providers: [],
  exports: [ProductCategoriesComponent]
})
export class ProductCategoriesComponentModule {
}
