import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { JobTagsComponent } from './job-tags.component';

@NgModule({
  imports: [MatCardModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule, CommonModule, MatInputModule, MatButtonModule],
  declarations: [JobTagsComponent],
  providers: [],
  exports: [JobTagsComponent]
})
export class JobTagsComponentModule {
}
