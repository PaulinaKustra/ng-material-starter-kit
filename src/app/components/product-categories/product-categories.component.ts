import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { CategoryModel } from '../../models/category.model';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-product-categories',
  styleUrls: ['./product-categories.component.scss'],
  templateUrl: './product-categories.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCategoriesComponent {
  readonly categories$: Observable<CategoryModel[]> = this._categoryService.getAll();
  readonly selectedCategory: FormControl = new FormControl();

  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAll(),
    this.selectedCategory.valueChanges]).pipe(
      map(([products, selectedCategory]) => {
        if (!selectedCategory) {
          return products;
        }
        return products.filter((product) => product.category === selectedCategory);
      })
    );


  constructor(private _productService: ProductService, private _categoryService: CategoryService) {
  }
}
