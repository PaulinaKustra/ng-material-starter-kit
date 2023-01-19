import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { JobPostsComponent } from './job-posts.component';

@NgModule({
  imports: [MatGridListModule, MatListModule, CommonModule, MatCardModule],
  declarations: [JobPostsComponent],
  providers: [],
  exports: [JobPostsComponent]
})
export class JobPostsComponentModule {
}
