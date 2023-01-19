import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { ProductCategoryComponent } from './product-category.component';

@NgModule({
  imports: [MatGridListModule, MatListModule, CommonModule],
  declarations: [ProductCategoryComponent],
  providers: [],
  exports: [ProductCategoryComponent]
})
export class ProductCategoryComponentModule {
}
