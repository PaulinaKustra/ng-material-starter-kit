import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {
  Observable,
  debounceTime,
  switchMap, filter
} from 'rxjs';
import {UniversityModel} from '../../models/university.model';
import {UniversityService} from '../../services/university.service';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-universities',
  styleUrls: ['./universities.component.scss'],
  templateUrl: './universities.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniversitiesComponent {

  readonly search: FormControl = new FormControl();

  readonly universitiesByCountry$: Observable<UniversityModel[]> =
    this.search.valueChanges.pipe(filter(Boolean),debounceTime(1000),
      switchMap((country) =>
        this._universityService.getAllByCountry(country)))


  constructor(
    private _universityService: UniversityService) {
  }
}

