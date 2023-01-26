import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap, take, tap} from 'rxjs/operators';
import {ProductDetailsModel} from '../../models/product-details.model';
import {ProductDetailsService} from '../../services/product-details.service';

@Component({
  selector: 'app-product-edit',
  styleUrls: ['./product-edit.component.scss'],
  templateUrl: './product-edit.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductEditComponent {
  readonly products$: Observable<ProductDetailsModel> = this._activatedRoute.params
    .pipe(switchMap((data) => this._productDetailsService.getOne(data['id'])),
      take(1)
      , tap((data) => this.form.patchValue(data))
    );

  readonly form: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
    price: new FormControl()
  });
  readonly categories$: Observable<string[]> = this._productDetailsService.getAll();

  constructor(private _productDetailsService: ProductDetailsService, private _activatedRoute: ActivatedRoute) {
    this.products$.subscribe();
  }

  onFormSubmitted(form: FormGroup): void {
    this._activatedRoute.params
      .pipe(
        take(1),
        switchMap((data) =>
          this._productDetailsService.update
          ({
            id: data['id'],
            ...form.value
          }))
      ).subscribe();

  }
}
