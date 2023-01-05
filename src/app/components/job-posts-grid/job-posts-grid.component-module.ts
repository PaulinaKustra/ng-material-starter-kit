import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { JobPostsGridComponent } from './job-posts-grid.component';

@NgModule({
  imports: [MatGridListModule, CommonModule, MatCardModule],
  declarations: [JobPostsGridComponent],
  providers: [],
  exports: [JobPostsGridComponent]
})
export class JobPostsGridComponentModule {
}
