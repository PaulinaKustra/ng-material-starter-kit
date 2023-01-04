import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesCheckboxService } from '../../services/categories-checkbox.service';

@Component({
  selector: 'app-categories-menu',
  styleUrls: ['./categories-menu.component.scss'],
  templateUrl: './categories-menu.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesMenuComponent {
  readonly categoriesMenu$: Observable<string[]> = this._categoriesCheckboxService.getAll();

  constructor(private _categoriesCheckboxService: CategoriesCheckboxService) {
  }
}
