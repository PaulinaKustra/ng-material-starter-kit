import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CartService } from '../../services/cart.service';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {switchMap} from "rxjs/operators";
import {CartModel} from "../../models/cart.model";

@Component({
  selector: 'app-cart-details',
  styleUrls: ['./cart-details.component.scss'],
  templateUrl: './cart-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartDetailsComponent {
  readonly cartDetails$: Observable<CartModel> = this._activatedRoute.params
    .pipe(switchMap((data) => this._cartService.getOne(data['id'])));


  constructor(private _cartService: CartService, private _activatedRoute: ActivatedRoute) {
  }
}
