import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {ProductsModel} from "../../models/products.model";
import {switchMap} from "rxjs/operators";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-product-category',
  styleUrls: ['./product-category.component.scss'],
  templateUrl: './product-category.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCategoryComponent {
  private _mainSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  private _detailsSubject: Subject<string> = new Subject<string>();
  public details$: Observable<ProductsModel[]> = this._detailsSubject.asObservable().pipe(switchMap((data) => this._productsService.getAllByCategory(data)));


  readonly data$: Observable<ProductsModel[]> = this._mainSubject.asObservable().pipe(switchMap(() => this._productsService.getAll()));

  onShowDetailsButtonClicked(category: string) {
    this._detailsSubject.next(category);
  }
  constructor(private _productsService: ProductsService) {
  }

}
