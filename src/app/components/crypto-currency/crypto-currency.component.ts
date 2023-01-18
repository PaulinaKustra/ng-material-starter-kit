import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CryptoCurrencyService } from '../../services/crypto-currency.service';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {switchMap} from "rxjs/operators";
import {CryptoModel} from "../../models/crypto.model";

@Component({
  selector: 'app-crypto-currency',
  styleUrls: ['./crypto-currency.component.scss'],
  templateUrl: './crypto-currency.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoCurrencyComponent {
  private _cryptoSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  private _cryptoDetailsSubject: Subject<CryptoModel> = new Subject<CryptoModel>();
  public cryptoDetails$: Observable<CryptoModel> = this._cryptoDetailsSubject.asObservable();



  readonly crypto$: Observable<CryptoModel[]> = this._cryptoSubject.asObservable().pipe(switchMap(() => this._cryptoCurrencyService.getAll()));


  onDetailsButtonClicked(crypto: CryptoModel) {
    this._cryptoDetailsSubject.next(crypto);
  }

  constructor(private _cryptoCurrencyService: CryptoCurrencyService) {
  }
}
