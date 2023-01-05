import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CryptoModel } from '../../models/crypto.model';
import { CryptoListService } from '../../services/crypto-list.service';

@Component({
  selector: 'app-crypto-table',
  styleUrls: ['./crypto-table.component.scss'],
  templateUrl: './crypto-table.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoTableComponent {
  readonly cryptoTable$: Observable<CryptoModel[]> = this._cryptoListService.getAll();

  constructor(private _cryptoListService: CryptoListService) {
  }
}
