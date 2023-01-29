import {ChangeDetectionStrategy, Component, OnDestroy, ViewEncapsulation} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {combineLatest, map, Observable, Subscription} from 'rxjs';
import {switchMap, take, tap} from 'rxjs/operators';
import {JobPostModel} from '../../models/job-post.model';
import {JobTagModel} from '../../models/job-tag.model';
import {JobTagsService} from '../../services/job-tags.service';

@Component({
  selector: 'app-job-form',
  styleUrls: ['./job-form.component.scss'],
  templateUrl: './job-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobFormComponent implements OnDestroy {
  readonly postDetails$: Observable<JobPostModel> = this._activatedRoute.params
    .pipe(switchMap((data) => this._jobTagsService.getSinglePost(data['id'])),
      take(1)
      , tap((data) => this.jobForm.patchValue(data))
    );

  readonly jobTags$: Observable<JobTagModel[]> = this._jobTagsService.getAll();

  data: JobTagModel[] = [];

  readonly jobForm: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    tags: new FormArray([])
  });

  subscription: Subscription | undefined;

  get tagsFormArray() {
    return this.jobForm.controls['tags'] as FormArray;
  }

  constructor(private _jobTagsService: JobTagsService, private _activatedRoute: ActivatedRoute) {

    this.postDetails$.subscribe();

    //wypełnienie tablicy tagsów:  tags: new FormArray([])
    this.subscription = combineLatest([this.postDetails$, this.jobTags$]).pipe(
      map(([details, jobtags]) => {
          this.data = jobtags;
          jobtags.forEach((tag) => {
            // stworzenie FormControl dla każdego taga:
            this.tagsFormArray.push(new FormControl(details.jobTagIds.some(e => e === +tag.id)))
          })
        }
      )
    ).subscribe()
  }


  onJobFormSubmitted(jobForm: FormGroup): void {
    console.log(JSON.stringify(jobForm.value));

    // filtrujemy zapisaną tablicę jobTags (data) porównując z zaznaczonymi checkboxami w JobFormie
    let jobIds = this.data.filter((value, index) => jobForm.value.tags[index]).map(x => +x.id)
    console.log(JSON.stringify(jobIds));

    this._activatedRoute.params.pipe(
      take(1),
      switchMap((data) => this._jobTagsService.updatePost({
        id: data['id'],
        jobTagIds: jobIds,
        description: jobForm.value.description,
        title: jobForm.value.tittle
      }))).subscribe();
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
