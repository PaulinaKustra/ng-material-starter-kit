import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from 'rxjs';
import { CryptoModel } from '../../models/crypto.model';
import { CryptoListService } from '../../services/crypto-list.service';

@Component({
  selector: 'app-crypto-list',
  styleUrls: ['./crypto-list.component.scss'],
  templateUrl: './crypto-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoListComponent {
  readonly crypto$: Observable<CryptoModel[]> = this._cryptoListService.getAll();

  constructor(private _cryptoListService: CryptoListService) {
  }
}
