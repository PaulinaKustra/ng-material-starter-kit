import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, combineLatest, map, Observable, of} from 'rxjs';
import {ProductModel} from '../../models/product.model';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-product-sorting-fe',
  styleUrls: ['./product-sorting-fe.component.scss'],
  templateUrl: './product-sorting-fe.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSortingFeComponent {
  private _sortedProductSubject: BehaviorSubject<string> = new BehaviorSubject<string>('asc');
  public sortedProduct$: Observable<string> = this._sortedProductSubject.asObservable();

  readonly sortingOrder$: Observable<string[]> = of(['asc', 'desc']);

  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAll(),
    this.sortedProduct$
  ]).pipe(
    map(([products, sortedProduct]) => {
      return products.sort((a, b) => {
        if (sortedProduct === 'asc') {
          return a.price > b.price ? 1 : -1;
        } else {
          return a.price < b.price ? 1 : -1;
        }
      })
    }))



  constructor(private _productService: ProductService) {
  }

  onSortingChanged(item: string): void {
    this._sortedProductSubject.next(item);
  }
}
