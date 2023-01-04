import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { CryptoListComponent } from './crypto-list.component';

@NgModule({
  imports: [MatChipsModule, CommonModule, MatCardModule],
  declarations: [CryptoListComponent],
  providers: [],
  exports: [CryptoListComponent]
})
export class CryptoListComponentModule {
}
