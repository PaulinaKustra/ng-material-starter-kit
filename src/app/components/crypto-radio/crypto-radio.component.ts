import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CryptoModel } from '../../models/crypto.model';
import { CryptoListService } from '../../services/crypto-list.service';

@Component({
  selector: 'app-crypto-radio',
  styleUrls: ['./crypto-radio.component.scss'],
  templateUrl: './crypto-radio.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoRadioComponent {
  readonly cryptoRadio$: Observable<CryptoModel[]> = this._cryptoListService.getAll();

  constructor(private _cryptoListService: CryptoListService) {
  }
}
