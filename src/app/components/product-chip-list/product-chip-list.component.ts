import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable, of, switchMap} from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-chip-list',
  styleUrls: ['./product-chip-list.component.scss'],
  templateUrl: './product-chip-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductChipListComponent {
  readonly products$: Observable<ProductModel[]> =  this._activatedRoute.queryParams
    .pipe(switchMap((data) => this._productService.getAllWithSort(data['sort'])));

  readonly sortingOrder$: Observable<string[]> = of(['asc', 'desc']);

  constructor(
    private _productService: ProductService,
    private _activatedRoute:ActivatedRoute) {
  }
}
