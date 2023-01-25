import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { JobTagModel } from '../../models/job-tag.model';
import { JobTagsService } from '../../services/job-tags.service';

@Component({
  selector: 'app-job-tags',
  styleUrls: ['./job-tags.component.scss'],
  templateUrl: './job-tags.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobTagsComponent {
  readonly tagDetails$: Observable<JobTagModel> = this._activatedRoute.params
    .pipe(switchMap((data) => this._jobTagsService.getSingleTag(data['id'])));

  readonly jobTags: FormGroup = new FormGroup({ name: new FormControl() });


  constructor(private _jobTagsService: JobTagsService, private _activatedRoute: ActivatedRoute) {
  }

  onJobTagsSubmitted(jobTags: FormGroup): void {
    this._activatedRoute.params.pipe(
      take(1),
      switchMap((data) => this._jobTagsService.update({
        id: data['id'],
        ...jobTags.value
      }))).subscribe();
  }
}
