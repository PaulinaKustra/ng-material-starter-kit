import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HolidaysModel } from '../models/holidays.model';

@Injectable()
export class HolidaysSelectionService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<HolidaysModel[]> {
    return this._httpClient.get<HolidaysModel[]>('https://date.nager.at/api/v2/publicholidays/2020/US');
  }
}
