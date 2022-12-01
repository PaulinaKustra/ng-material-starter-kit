import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AgeModel } from '../../models/age.model';
import { AgeService } from '../../services/age.service';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgeComponent {
  readonly age$: Observable<AgeModel> = this._ageService.getAll();

  constructor(private _ageService: AgeService, private _activatedRoute: ActivatedRoute) {
  }
}
