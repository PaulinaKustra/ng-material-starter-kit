import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { HolidaysModel } from '../../models/holidays.model';
import { HolidaysSelectionService } from '../../services/holidays-selection.service';

@Component({
  selector: 'app-holidays-selection',
  styleUrls: ['./holidays-selection.component.scss'],
  templateUrl: './holidays-selection.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HolidaysSelectionComponent {
  readonly holidays$: Observable<HolidaysModel[]> = this._holidaysSelectionService.getAll();

  constructor(private _holidaysSelectionService: HolidaysSelectionService) {
  }
}
