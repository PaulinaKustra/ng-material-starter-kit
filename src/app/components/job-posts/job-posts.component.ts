import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import {JobPostsModel} from '../../models/job-posts.model';
import { JobPostsService } from '../../services/job-posts.service';
import {JobTagsModel} from "../../models/job-tags.model";

@Component({
  selector: 'app-job-posts',
  styleUrls: ['./job-posts.component.scss'],
  templateUrl: './job-posts.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobPostsComponent {
  readonly jobPosts$: Observable<JobPostsModel[]> = this._jobPostsService.getAllWithTags();
  readonly jobTags$: Observable<JobTagsModel[]> = this._jobPostsService.getAllTags();


  constructor(private _jobPostsService: JobPostsService) {
  }
}
