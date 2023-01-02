import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CryptoChipsModel } from '../../models/crypto-chips.model';
import { CryptoChipsService } from '../../services/crypto-chips.service';

@Component({
  selector: 'app-crypto-chips',
  styleUrls: ['./crypto-chips.component.scss'],
  templateUrl: './crypto-chips.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoChipsComponent {
  readonly cryptoData$: Observable<CryptoChipsModel[]> = this._cryptoChipsService.getAll();

  constructor(private _cryptoChipsService: CryptoChipsService) {
  }
}
