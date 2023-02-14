import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { BeerComponent } from './beer.component';

@NgModule({
  imports: [
    MatPaginatorModule,
    MatListModule,
    CommonModule
  ],
  declarations: [BeerComponent],
  providers: [],
  exports: [BeerComponent]
})
export class BeerComponentModule {
}
