import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { ProductSearchComponent } from './product-search.component';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    MatListModule
  ],
  declarations: [ProductSearchComponent],
  providers: [],
  exports: [ProductSearchComponent]
})
export class ProductSearchComponentModule {
}
