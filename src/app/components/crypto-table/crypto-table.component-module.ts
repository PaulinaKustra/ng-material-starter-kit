import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { CryptoTableComponent } from './crypto-table.component';

@NgModule({
  imports: [MatCardModule, CommonModule, MatTableModule],
  declarations: [CryptoTableComponent],
  providers: [],
  exports: [CryptoTableComponent]
})
export class CryptoTableComponentModule {
}
