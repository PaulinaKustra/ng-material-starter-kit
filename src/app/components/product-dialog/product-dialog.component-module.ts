import { NgModule } from '@angular/core';
import { ProductDialogComponent } from './product-dialog.component';
import {MatListModule} from "@angular/material/list";
import {NgForOf} from "@angular/common";

@NgModule({
  imports: [
    MatListModule,
    NgForOf
  ],
  declarations: [ProductDialogComponent],
  providers: [],
  exports: [ProductDialogComponent]
})
export class ProductDialogComponentModule {
}
