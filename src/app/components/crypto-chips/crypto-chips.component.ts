import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Observable, combineLatest} from 'rxjs';
import {map} from 'rxjs/operators';
import {CryptoModel} from '../../models/crypto.model';
import {CryptoService} from '../../services/crypto.service';
import {FormArray, FormControl} from '@angular/forms';

@Component({
  selector: 'app-crypto-chips',
  styleUrls: ['./crypto-chips.component.scss'],
  templateUrl: './crypto-chips.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoChipsComponent {
  readonly cryptoFilter: FormControl = new FormControl();
  selectedCrypto: FormArray = new FormArray<FormControl>([]);

  readonly crypto$: Observable<CryptoModel[]> = combineLatest([
    this._cryptoService.getAll(),
    this.cryptoFilter.valueChanges]).pipe(
    map(([crypto, selectedCrypto]) => {
      if (!selectedCrypto) {
        return crypto;
      }
      return crypto.filter((crypto) =>
        crypto.symbol.toLowerCase().includes(selectedCrypto.toLowerCase()));
    })
  );

  onSelected(selected: string) {
    this.selectedCrypto.push(new FormControl(selected));
  }

  constructor(private _cryptoService: CryptoService) {
  }
}
