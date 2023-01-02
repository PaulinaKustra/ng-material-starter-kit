import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCategoriesService } from '../../services/product-categories.service';

@Component({
  selector: 'app-product-categories',
  styleUrls: ['./product-categories.component.scss'],
  templateUrl: './product-categories.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCategoriesComponent {
  readonly categories$: Observable<string[]> = this._productCategoriesService.getAll();

  constructor(private _productCategoriesService: ProductCategoriesService) {
  }
}
