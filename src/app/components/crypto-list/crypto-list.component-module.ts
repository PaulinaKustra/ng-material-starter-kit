import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { CryptoListComponent } from './crypto-list.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
    imports: [MatChipsModule, CommonModule, MatCardModule, MatProgressSpinnerModule],
  declarations: [CryptoListComponent],
  providers: [],
  exports: [CryptoListComponent]
})
export class CryptoListComponentModule {
}
