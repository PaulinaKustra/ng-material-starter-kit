import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, Observable, switchMap, take, tap} from 'rxjs';
import {ProductModel} from '../../models/product.model';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-product-sorting-be',
  styleUrls: ['./product-sorting-be.component.scss'],
  templateUrl: './product-sorting-be.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSortingBeComponent {
  private _asc : string = 'asc';
  private _desc : string = 'desc';
  _sortedProductSubject: BehaviorSubject<string> = new BehaviorSubject<string>(this._asc);
  public sortedProduct$: Observable<string> = this._sortedProductSubject.asObservable();
  readonly products$: Observable<ProductModel[]>=this._productService.getAll();

  readonly productsSorted$: Observable<ProductModel[]> = this.sortedProduct$.pipe(
    switchMap((data) => {
        if (!data) {
          return this._productService.getAll()
        }
        return this._productService.getSortedProducts(data);
      }
    ));

  constructor(private _productService: ProductService) {
  }

  onSortingChanged(): void {
    this._sortedProductSubject.pipe(take(1), tap((sorting) =>
      sorting == this._asc ?
        this._sortedProductSubject.next(this._desc)
        :
        this._sortedProductSubject.next(this._asc))).subscribe()
  }
}
