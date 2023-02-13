import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { CryptoSortingFeComponent } from './crypto-sorting-fe.component';

@NgModule({
  imports: [MatCardModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule, MatOptionModule, CommonModule, MatListModule, FlexModule],
  declarations: [CryptoSortingFeComponent],
  providers: [],
  exports: [CryptoSortingFeComponent]
})
export class CryptoSortingFeComponentModule {
}
