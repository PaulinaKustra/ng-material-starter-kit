import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { UniversitiesModel } from '../../models/universities.model';
import { UniversitiesService } from '../../services/universities.service';

@Component({
  selector: 'app-universities-radio',
  styleUrls: ['./universities-radio.component.scss'],
  templateUrl: './universities-radio.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniversitiesRadioComponent {
  readonly polishUniversities$: Observable<UniversitiesModel[]> = this._universitiesService.getAll();
    university = new FormControl('', [Validators.required]);

  constructor(private _universitiesService: UniversitiesService){}

}
