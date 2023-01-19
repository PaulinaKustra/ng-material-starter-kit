import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { JobPostsService } from '../../services/job-posts.service';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {switchMap} from "rxjs/operators";
import {JobPostsModel} from "../../models/job-posts.model";
import {TagsModel} from "../../models/tags.model";

@Component({
  selector: 'app-job-posts',
  styleUrls: ['./job-posts.component.scss'],
  templateUrl: './job-posts.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobPostsComponent {
  private _mainSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  private _detailsSubject: Subject<any> = new Subject<any>();
  public details$: Observable<TagsModel> = this._detailsSubject.asObservable().pipe(switchMap((data) => this._jobPostsService.getTags(data)));


  readonly data$: Observable<JobPostsModel[]> = this._mainSubject.asObservable().pipe(switchMap(() => this._jobPostsService.getPosts()));

  onShowDetailsButtonClicked(id: any) {
    this._detailsSubject.next(id.toString());
  }

  constructor(private _jobPostsService: JobPostsService) {
  }
}
