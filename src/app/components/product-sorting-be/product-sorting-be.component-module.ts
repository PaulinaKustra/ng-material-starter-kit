import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { ProductSortingBeComponent } from './product-sorting-be.component';

@NgModule({
  imports: [MatCardModule, MatButtonToggleModule, ReactiveFormsModule, CommonModule, MatButtonModule, MatListModule],
  declarations: [ProductSortingBeComponent],
  providers: [],
  exports: [ProductSortingBeComponent]
})
export class ProductSortingBeComponentModule {
}
