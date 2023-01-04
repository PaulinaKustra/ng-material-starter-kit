import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { NamesTableService } from '../../services/names-table.service';

@Component({
  selector: 'app-names-table',
  styleUrls: ['./names-table.component.scss'],
  templateUrl: './names-table.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NamesTableComponent {
  readonly names$: Observable<string[]> = this._namesTableService.getAll();

  constructor(private _namesTableService: NamesTableService) {
  }
}
