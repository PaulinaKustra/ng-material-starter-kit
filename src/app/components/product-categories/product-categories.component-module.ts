import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { ProductCategoriesComponent } from './product-categories.component';

@NgModule({
  imports: [MatFormFieldModule, MatRadioModule, ReactiveFormsModule, CommonModule, MatListModule],
  declarations: [ProductCategoriesComponent],
  providers: [],
  exports: [ProductCategoriesComponent]
})
export class ProductCategoriesComponentModule {
}
