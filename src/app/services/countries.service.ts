import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryListModel } from '../models/country-list.model';

@Injectable()
export class CountriesService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<CountryListModel[]> {
    return this._httpClient.get<CountryListModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/countries');
  }

  delete(id: string): Observable<CountryListModel> {
    return this._httpClient.delete<CountryListModel>('https://636ce2d8ab4814f2b2712854.mockapi.io/countries/' + id);
  }
}
