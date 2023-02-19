import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { UniversitiesComponent } from './universities.component';

@NgModule({
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatAutocompleteModule, MatOptionModule, CommonModule, MatListModule],
  declarations: [UniversitiesComponent],
  providers: [],
  exports: [UniversitiesComponent]
})
export class UniversitiesComponentModule {
}
