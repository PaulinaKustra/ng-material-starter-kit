import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from 'rxjs';
import { ProductsModel } from '../../models/products.model';
import { ProductListService } from '../../services/product-list.service';

@Component({
  selector: 'app-product-list',
  styleUrls: ['./product-list.component.scss'],
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  readonly products$: Observable<ProductsModel[]> = this._productListService.getAll();

  constructor(private _productListService: ProductListService) {
  }
}
