import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ProductDetailsComponent } from './product-details.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
    imports: [MatCardModule, CommonModule, MatExpansionModule, MatIconModule],
  declarations: [ProductDetailsComponent],
  providers: [],
  exports: [ProductDetailsComponent]
})
export class ProductDetailsComponentModule {
}
