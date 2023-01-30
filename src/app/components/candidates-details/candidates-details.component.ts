import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {combineLatest, map, Observable, Subscription} from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { CandidateModel } from '../../models/candidate.model';
import { StatusModel } from '../../models/status.model';
import { CandidatesService } from '../../services/candidates.service';
import {SkillsModel} from "../../models/skills.model";

@Component({
  selector: 'app-candidates-details',
  styleUrls: ['./candidates-details.component.scss'],
  templateUrl: './candidates-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CandidatesDetailsComponent {
  readonly data$: Observable<CandidateModel> = this._activatedRoute.params
    .pipe(switchMap((data) => this._candidatesService.getOne(data['id'])),
      take(1)
      , tap((data) => this.form.patchValue(data))
    );
  readonly form: FormGroup = new FormGroup({
    name: new FormControl(),
    surname: new FormControl(),
    email: new FormControl(),
    statusId: new FormControl(),
    skills:new FormArray([])
  });
  get skillsFormArray() {
    return this.form.controls['skills'] as FormArray;
  }
  readonly statuses$: Observable<StatusModel[]> = this._candidatesService.getAllStatuses();
  readonly skills$: Observable<SkillsModel[]> = this._candidatesService.getAllSkills();
  data: SkillsModel[] = [];
  subscription: Subscription | undefined;
  constructor(private _candidatesService: CandidatesService, private _activatedRoute: ActivatedRoute, private _router: Router) {

    this.subscription = combineLatest([this.data$, this.skills$]).pipe(
      map(([details, skills]) => {
          this.data = skills;
          skills.forEach((skill) => {
            console.log("details.skillIds ", JSON.stringify(details.skillIds))
            this.skillsFormArray.push(new FormControl(details.skillIds.some(e =>
            {
              console.log("skill ", JSON.stringify(skill))
              console.log("equals ", e === skill.id)
              return e === skill.id
            }
            )))
          })
        }
      )
    ).subscribe()
  }

  onFormSubmitted(form: FormGroup): void {

    let skillIds = this.data.filter((value, index) => form.value.skills[index]).map(x => x.id)
    this._activatedRoute.params.pipe(
      take(1),
      switchMap((data) => this._candidatesService.update({
        id: data['id'],
        name: form.value.name,
        surname: form.value.surname,
        email: form.value.email,
        statusId: form.value.statusId,
        skillIds: skillIds
      }))).subscribe(() => this._router.navigate(['']));
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
