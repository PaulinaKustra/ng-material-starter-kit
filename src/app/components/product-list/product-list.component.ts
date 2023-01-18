import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, Observable, switchMap} from 'rxjs';
import { ProductsModel } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  styleUrls: ['./product-list.component.scss'],
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  _deleteProductsSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);

  readonly products$: Observable<ProductsModel[]> = this._deleteProductsSubject.asObservable().pipe(switchMap(() => this._productsService.getAll()));


  onDeleteButtonClicked(product: ProductsModel){
    this._productsService.delete(product.id).subscribe(() => this._deleteProductsSubject.next());
  }

  constructor(private _productsService: ProductsService) {
  }
}
