import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';
import {combineLatest, map, Observable, of, startWith} from 'rxjs';
import {ProductModel} from '../../models/product.model';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-products',
  styleUrls: ['./products.component.scss'],
  templateUrl: './products.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
  readonly sortingOrderControl: FormControl = new FormControl();

  readonly sortingOrder$: Observable<string[]> = of(['asc', 'desc']);

  readonly productsSorted$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAll(),
    this.sortingOrderControl.valueChanges.pipe(startWith('asc')),
  ]).pipe(map(([products, order]) => {
    if (order) {
      return products.sort((a, b) => {
        if (order === 'asc') {
          return a.title?.toUpperCase() > b.title?.toUpperCase() ? 1 : -1;
        }
        return a.title?.toUpperCase() < b.title?.toUpperCase() ? 1 : -1;

      })
    }
    return products;
  }))

  constructor(private _productService: ProductService) {
  }
}
