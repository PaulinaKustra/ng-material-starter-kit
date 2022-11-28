import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CategoriesCheckboxComponent } from './categories-checkbox.component';

@NgModule({
  imports: [MatCardModule, MatCheckboxModule, CommonModule],
  declarations: [CategoriesCheckboxComponent],
  providers: [],
  exports: [CategoriesCheckboxComponent]
})
export class CategoriesCheckboxComponentModule {
}
