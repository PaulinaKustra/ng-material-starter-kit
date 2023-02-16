import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, combineLatest, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {JobPostModel} from '../../models/job-post.model';
import {JobPostService} from '../../services/job-post.service';

@Component({
  selector: 'app-job-post',
  styleUrls: ['./job-post.component.scss'],
  templateUrl: './job-post.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobPostComponent {
  readonly sortingOrder$: Observable<string[]> = of(['asc', 'desc']);
  readonly sortBy$: Observable<string[]> = of(['title', 'description'])

  readonly sortingForm: FormGroup = new FormGroup({
    property: new FormControl(),
    directions: new FormControl()
  });


  readonly jobPosts$: Observable<JobPostModel[]> = combineLatest([
    this._jobPostService.getAll(),
    this.sortingForm.valueChanges
  ]).pipe(map(([posts, order]) => {
    if (!order || !order.directions || !order.property)
      return [];

    // return posts.sort((a, b) => {
    //   if (order.directions === 'asc') {
    //     return a[order.directions].toUpperCase() > b[order.directions].toUpperCase() ? 1 : -1;
    //   }
    //   return a[order.directions].toUpperCase() < b[order.directions].toUpperCase() ? 1 : -1;
    // })


    if (order.property === "title") {
      return posts.sort((a, b) => {
        if (order.directions === 'asc') {
          return a.title?.toUpperCase() > b.title?.toUpperCase() ? 1 : -1;
        }
        return a.title?.toUpperCase() < b.title?.toUpperCase() ? 1 : -1;
      })
    }
    return posts.sort((a, b) => {
      if (order.directions === 'asc') {
        return a.description?.toUpperCase() > b.description?.toUpperCase() ? 1 : -1;
      } else {
        return a.description?.toUpperCase() < b.description?.toUpperCase() ? 1 : -1;
      }
    })
  }))

  constructor(private _jobPostService: JobPostService) {
  }

}
