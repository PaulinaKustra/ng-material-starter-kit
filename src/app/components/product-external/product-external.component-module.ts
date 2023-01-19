import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { ProductExternalComponent } from './product-external.component';

@NgModule({
  imports: [MatGridListModule, MatListModule, CommonModule],
  declarations: [ProductExternalComponent],
  providers: [],
  exports: [ProductExternalComponent]
})
export class ProductExternalComponentModule {
}
