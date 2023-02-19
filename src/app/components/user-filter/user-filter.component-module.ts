import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { UserFilterComponent } from './user-filter.component';

@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatOptionModule, CommonModule, MatInputModule, MatButtonModule, MatRadioModule, MatTableModule],
  declarations: [UserFilterComponent],
  providers: [],
  exports: [UserFilterComponent]
})
export class UserFilterComponentModule {
}
