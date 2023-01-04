import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { HolidaysSelectionComponent } from './holidays-selection.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule, MatOptionModule],
  declarations: [HolidaysSelectionComponent],
  providers: [],
  exports: [HolidaysSelectionComponent]
})
export class HolidaysSelectionComponentModule {
}
