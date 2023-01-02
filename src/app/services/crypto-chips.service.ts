import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CryptoChipsModel } from '../models/crypto-chips.model';

@Injectable()
export class CryptoChipsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<CryptoChipsModel[]> {
    return  this._httpClient.get<CryptoChipsModel[]>('https://api2.binance.com/api/v3/ticker/24hr');
  }
}
