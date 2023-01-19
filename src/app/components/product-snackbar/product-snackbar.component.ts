import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ProductSnackbarService} from '../../services/product-snackbar.service';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {switchMap} from "rxjs/operators";
import {ProductSnackbarModel} from "../../models/product-snackbar.model";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-product-snackbar',
  styleUrls: ['./product-snackbar.component.scss'],
  templateUrl: './product-snackbar.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSnackbarComponent {
  private _mainSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  private _detailsSubject: Subject<string> = new Subject<string>();
  readonly data$: Observable<ProductSnackbarModel[]> = this._mainSubject.asObservable().pipe(switchMap(() => this._productSnackbarService.getAll()));


  showSnackbarIfNeeded(productId: string) {
    this._productSnackbarService.getMetadata(productId).subscribe((data) => {
        let stock = data.find(x => x.stock < 20)
        if (stock) {
          this._snackBar.open(stock.stock == 1 ?  'Hurry up! There is only one left!' :  `Hurry up! There are only ${stock.stock} left!`);
        }
      }
    )
  }

  onShowDetailsButtonClicked(id: string) {
    this._detailsSubject.next(id);
  }

  constructor(private _productSnackbarService: ProductSnackbarService, private _snackBar: MatSnackBar) {
    this._detailsSubject.subscribe(data =>{
         this.showSnackbarIfNeeded(data);
      }

    )
  }
}
