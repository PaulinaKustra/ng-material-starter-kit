import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {ProductsModel} from "../../models/products.model";
import {switchMap} from "rxjs/operators";
import {ProductsService} from "../../services/products.service";
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ProductDialogComponent} from "../product-dialog/product-dialog.component";
import {ProductDialogModel} from "../../models/product-dialog.model";



@Component({
  selector: 'app-product-popup',
  styleUrls: ['./product-popup.component.scss'],
  templateUrl: './product-popup.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPopupComponent {
  private _mainSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  private _detailsSubject: Subject<ProductsModel> = new Subject<ProductsModel>()


  readonly data$: Observable<ProductsModel[]> = this._mainSubject.asObservable().pipe(switchMap(() => this._productsService.getAll()));


  showPopup(selected:ProductsModel)
  {
    this._productsService.getAllByCategory(selected.category).subscribe(data=>
      {
        this.dialog.open(ProductDialogComponent, {
          data: {
             selectedProduct: selected,
             siblingsProducts: data
          } as ProductDialogModel,
        });
      }
    )
  }

  onShowDetailsButtonClicked(selected: ProductsModel) {
    this._detailsSubject.next(selected);
  }
  constructor(private _productsService: ProductsService, public dialog: MatDialog) {
    this._detailsSubject.subscribe((data) => this.showPopup(data));
  }

}
