import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AgePredictionModel } from '../../models/age-prediction.model';
import { AgePredictionService } from '../../services/age-prediction.service';

@Component({
  selector: 'app-age-prediction',
  styleUrls: ['./age-prediction.component.scss'],
  templateUrl: `./age-prediction.component.html`,
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgePredictionComponent {
  readonly age$: Observable<AgePredictionModel> = this._activatedRoute.params
    .pipe(switchMap((data) => this._agePredictionService.getOne(data['name'])));


  constructor(private _agePredictionService: AgePredictionService, private _activatedRoute: ActivatedRoute) {
  }
}
