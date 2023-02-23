import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { JobPostSearchComponent } from './job-post-search.component';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {RouterLink} from "@angular/router";

@NgModule({
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    NgForOf,
    MatSelectModule,
    AsyncPipe,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    MatChipsModule,
    MatTableModule,
    NgIf,
  ],
  declarations: [JobPostSearchComponent],
  providers: [],
  exports: [JobPostSearchComponent]
})
export class JobPostSearchComponentModule {
}
