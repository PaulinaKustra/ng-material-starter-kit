import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductFormService } from '../../services/product-form.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-form',
  styleUrls: ['./product-form.component.scss'],
  templateUrl: './product-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent {
  readonly categories$: Observable<string[]> = this._productFormService.getAllCategories();
  readonly productForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required])
  });

  constructor(private _productFormService: ProductFormService) {
  }

//   onProductFormSubmitted(productForm: FormGroup): void {
//     let product : ProductFormModel= {
//       title: this.productForm.get('title')?.value,
//       description: this.productForm.get('description')?.value,
//       price: this.productForm.get('price')?.value,
//       category: this.productForm.get('category')?.value
//     } as ProductFormModel;
// this._productFormService.submit(product);
//   }
}
