import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CryptoChipsComponent } from './crypto-chips.component';
import {MatChipsModule} from "@angular/material/chips";

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatChipsModule],
  declarations: [CryptoChipsComponent],
  providers: [],
  exports: [CryptoChipsComponent]
})
export class CryptoChipsComponentModule {
}
