import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from 'rxjs';
import { CategoriesCheckboxService } from '../../services/categories-checkbox.service';

@Component({
  selector: 'app-categories-checkbox',
  styleUrls: ['./categories-checkbox.component.scss'],
  templateUrl: './categories-checkbox.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesCheckboxComponent {
  readonly categories$: Observable<string[]> = this._categoriesCheckboxService.getAll();

  constructor(private _categoriesCheckboxService: CategoriesCheckboxService) {
  }
}
