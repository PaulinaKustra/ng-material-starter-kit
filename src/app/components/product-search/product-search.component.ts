import { ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import { combineLatest, Observable} from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { FormControl} from "@angular/forms";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-product-search',
  styleUrls: ['./product-search.component.scss'],
  templateUrl: './product-search.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSearchComponent {
  readonly search: FormControl = new FormControl();

  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAll(),
    this.search.valueChanges]).pipe(
    map(([products, search]) => {
      console.log('search',search)
      if (!search) {
        return products;
      }
      return products.filter((product) =>
        product.title.toUpperCase().includes(search.toUpperCase()) || product.price.toString().includes(search));
    })
  );

  constructor(private _productService: ProductService) {
  }
}
