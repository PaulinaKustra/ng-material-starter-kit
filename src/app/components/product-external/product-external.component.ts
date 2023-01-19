import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {switchMap} from "rxjs/operators";
import {ProductsModel} from "../../models/products.model";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-product-external',
  styleUrls: ['./product-external.component.scss'],
  templateUrl: './product-external.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductExternalComponent {
  private _mainSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  private _detailsSubject: Subject<string> = new Subject<string>();
  public details$: Observable<ProductsModel> = this._detailsSubject.asObservable().pipe(switchMap((data) => this._productsService.getOne(data)));


  readonly data$: Observable<ProductsModel[]> = this._mainSubject.asObservable().pipe(switchMap(() => this._productsService.getAll()));

  onShowDetailsButtonClicked(id: number) {
    this._detailsSubject.next(id.toString());
  }
  constructor(private _productsService: ProductsService) {
  }
}
