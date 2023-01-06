import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { JobPostsComponent } from './job-posts.component';

@NgModule({
  imports: [MatCardModule, CommonModule, MatTableModule],
  declarations: [JobPostsComponent],
  providers: [],
  exports: [JobPostsComponent]
})
export class JobPostsComponentModule {
}
