import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {ProductsModel} from '../../models/products.model';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  styleUrls: ['./product-details.component.scss'],
  templateUrl: './product-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent {
   private _productSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  private _productDetailsSubject: Subject<ProductsModel> = new Subject<ProductsModel>();
  public productDetails$: Observable<ProductsModel> = this._productDetailsSubject.asObservable();



  readonly products$: Observable<ProductsModel[]> = this._productSubject.asObservable().pipe(switchMap(() => this._productsService.getAll()));


  onDetailsButtonClicked(product: ProductsModel) {
    this._productDetailsSubject.next(product);
  }

  constructor(private _productsService: ProductsService) {
  }
}
