import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CategoriesMenuComponent } from './categories-menu.component';

@NgModule({
  imports: [MatCardModule, MatButtonModule, MatMenuModule, CommonModule],
  declarations: [CategoriesMenuComponent],
  providers: [],
  exports: [CategoriesMenuComponent]
})
export class CategoriesMenuComponentModule {
}
