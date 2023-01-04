import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { CategoriesCheckboxComponent } from './categories-checkbox.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
    imports: [MatListModule, CommonModule, MatCardModule, MatCheckboxModule, MatProgressSpinnerModule],
  declarations: [CategoriesCheckboxComponent],
  providers: [],
  exports: [CategoriesCheckboxComponent]
})
export class CategoriesCheckboxComponentModule {
}
