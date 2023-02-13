import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, combineLatest, map, Observable, of} from 'rxjs';
import {CryptoModel} from '../../models/crypto.model';
import {CryptoService} from '../../services/crypto.service';

@Component({
  selector: 'app-crypto-sorting-fe',
  styleUrls: ['./crypto-sorting-fe.component.scss'],
  templateUrl: './crypto-sorting-fe.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoSortingFeComponent {

  public sortingOrder$ = of(['asc', 'desc']);
  public sortingBy$ = of(['lastPrice', 'openPrice', 'priceChange']);

  private _sortingOrderSubject: BehaviorSubject<string | undefined> =
    new BehaviorSubject<string | undefined>(undefined);

  public _sortingBySubject: BehaviorSubject<string | undefined> =
    new BehaviorSubject<string | undefined>(undefined);

  readonly crypto$: Observable<CryptoModel[]> = combineLatest([
    this._cryptoService.getAll(),
    this._sortingBySubject,
    this._sortingOrderSubject,
  ]).pipe(map(([crypto, sortingBy, sortingOrder]) => {
    if (sortingBy) {
      switch (sortingBy) {
        case "lastPrice":
          return crypto.sort((a, b) => {
            return this.sortOrderBy(+a.lastPrice, +b.lastPrice, sortingOrder);
          });
        case "openPrice":
          return crypto.sort((a, b) => {
            return this.sortOrderBy(+a.openPrice, +b.openPrice, sortingOrder);
          });
        case "priceChange":
          return crypto.sort((a, b) => {
            return this.sortOrderBy(+a.priceChange, +b.priceChange, sortingOrder);
          });
      }

    }
    return crypto;
  }))

  sortOrderBy(a: number, b: number, sortingOrder: string | undefined) {

    if (sortingOrder === 'asc') {
      return a > b ? 1 : -1;
    } else {
      return a < b ? 1 : -1;
    }
  }

  constructor(private _cryptoService: CryptoService) {
  }

  sortingOrderSelected(order: string) {
    this._sortingOrderSubject.next(order)
  }

  sortingBySelected(order: string) {
    this._sortingBySubject.next(order)
  }
}
