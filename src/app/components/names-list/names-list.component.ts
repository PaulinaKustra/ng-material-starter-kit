import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { NamesTableService } from '../../services/names-table.service';

@Component({
  selector: 'app-names-list',
  styleUrls: ['./names-list.component.scss'],
  templateUrl: './names-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NamesListComponent {
  readonly names$: Observable<string[]> = this._namesTableService.getAll();

  constructor(private _namesTableService: NamesTableService) {
  }
}
