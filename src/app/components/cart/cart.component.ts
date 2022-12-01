import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import {CartModel} from '../../models/cart.model';
import { CartService } from '../../services/cart.service';
import {switchMap} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {
  //readonly cart$: Observable<CartModel> = this._cartService.getAll();

  readonly cart$: Observable<CartModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._cartService.getOne(data['id'])));

  constructor(private _activatedRoute: ActivatedRoute, private _cartService: CartService) {
  }
}
