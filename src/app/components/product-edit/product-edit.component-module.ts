import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { ProductEditComponent } from './product-edit.component';

@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, MatSelectModule, MatOptionModule, MatIconModule],
  declarations: [ProductEditComponent],
  providers: [],
  exports: [ProductEditComponent]
})
export class ProductEditComponentModule {
}