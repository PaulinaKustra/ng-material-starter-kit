import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { JobPostModel } from '../../models/job-post.model';
import { JobTagModel } from '../../models/job-tag.model';
import { JobTagsService } from '../../services/job-tags.service';

@Component({
  selector: 'app-job-form-my-approach',
  styleUrls: ['./job-form-my-approach.component.scss'],
  templateUrl: './job-form-my-approach.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobFormMyApproachComponent {
  readonly postDetails$: Observable<JobPostModel> = this._activatedRoute.params.pipe(
    switchMap((data) => this._jobTagsService.getSinglePost(data["id"]))
  );

  readonly form: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    jobTagIds: new FormGroup({}),
  });

  readonly jobTags$: Observable<JobTagModel[]> = combineLatest([
    this.postDetails$,
    this._jobTagsService.getAll(),
  ]).pipe(
    tap(([details, list]) => {
      list.forEach((tag) => {
        (this.form.get("jobTagIds") as FormGroup).addControl(
          tag.id,
          new FormControl(details.jobTagIds.includes(+tag.id))
        );
      });
    }),
    map(([details, list]) => {
      return list;
    })
  );

  constructor(
    private _jobTagsService: JobTagsService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.postDetails$.subscribe((data) => {
      this.form.patchValue(data);
    });
  }

  onFormSubmitted(form: FormGroup): void { }
}
