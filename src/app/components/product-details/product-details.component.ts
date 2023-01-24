import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetailsModel } from '../../models/product-details.model';
import { ProductDetailsService } from '../../services/product-details.service';
import {switchMap} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-details',
  styleUrls: ['./product-details.component.scss'],
  templateUrl: './product-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent {
    readonly productDetails$: Observable<ProductDetailsModel> = this._activatedRoute.params
    .pipe(switchMap((data) => this._productDetailsService.getOne(data['id'])));

  constructor(private _productDetailsService: ProductDetailsService, private _activatedRoute: ActivatedRoute) {
  }
}
