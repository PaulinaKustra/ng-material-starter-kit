import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, Observable, switchMap} from 'rxjs';
import {ProductModel} from '../../models/product.model';
import {CategoryService} from '../../services/category.service';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-products',
  styleUrls: ['./products.component.scss'],
  templateUrl: './products.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
  private _selectedCategorySubject: BehaviorSubject<string | undefined> =
    new BehaviorSubject<string | undefined>(undefined);

  public selectedCategory$: Observable<string | undefined> =
    this._selectedCategorySubject.asObservable();

  readonly categories$: Observable<string[]> =
    this._categoryService.getAll();

  readonly products$: Observable<ProductModel[]> = this.selectedCategory$.pipe(
    switchMap((data) => {
      if(!data) {
        return this._productService.getAll();
      }
      return this._categoryService.getAllInCategory(data as string)
    }));

    // combineLatest([
    //   this._productService.getAll(),
    //   this.selectedCategory$]).pipe(
    //   map(([list, selectedCategory]) => {
    //     if (!selectedCategory) {
    //       return list;
    //     }
    //     return list.filter((product) => product.category === selectedCategory);
    //   })
    // );


  constructor(
    private _categoryService: CategoryService,
    private _productService: ProductService) {
  }

  onFilteringChanged(category: string): void {
    this._selectedCategorySubject.next(category);
  }
}
