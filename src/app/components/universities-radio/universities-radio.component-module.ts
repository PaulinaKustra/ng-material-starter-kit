import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { UniversitiesRadioComponent } from './universities-radio.component';

@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatRadioModule, CommonModule],
  declarations: [UniversitiesRadioComponent],
  providers: [],
  exports: [UniversitiesRadioComponent]
})
export class UniversitiesRadioComponentModule {
}
