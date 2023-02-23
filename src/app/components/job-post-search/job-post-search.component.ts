import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable, switchMap} from 'rxjs';
import { JobPostModel } from '../../models/job-post.model';
import { JobPostService } from '../../services/job-post.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-job-post-search',
  styleUrls: ['./job-post-search.component.scss'],
  templateUrl: './job-post-search.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobPostSearchComponent {
  readonly search: FormControl = new FormControl();

  readonly jobPosts$: Observable<JobPostModel[]> = this._activatedRoute.queryParams
    .pipe(switchMap((data) => this._jobPostService.getAll(data['search'])));

  constructor(private _jobPostService: JobPostService,
              private _activatedRoute:ActivatedRoute) {
  }
}
