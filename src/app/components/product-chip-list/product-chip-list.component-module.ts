import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { ProductChipListComponent } from './product-chip-list.component';
import {RouterLink, RouterLinkWithHref} from "@angular/router";
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  imports: [MatChipsModule, CommonModule, RouterLinkWithHref, MatListModule, RouterLink, MatGridListModule],
  declarations: [ProductChipListComponent],
  providers: [],
  exports: [ProductChipListComponent]
})
export class ProductChipListComponentModule {
}
