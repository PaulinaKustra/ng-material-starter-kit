import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { JobPostsModel } from '../../models/job-posts.model';
import { JobPostsService } from '../../services/job-posts.service';

@Component({
  selector: 'app-job-posts-grid',
  styleUrls: ['./job-posts-grid.component.scss'],
  templateUrl: './job-posts-grid.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobPostsGridComponent {
  readonly jobPostsGrid$: Observable<JobPostsModel[]> = this._jobPostsService.getAll();

  constructor(private _jobPostsService: JobPostsService) {
  }
}
