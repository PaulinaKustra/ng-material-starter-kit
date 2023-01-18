import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDataModel } from '../models/user-data.model';

@Injectable({ providedIn: 'root' })
export class UserDataService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<UserDataModel[]> {
    return this._httpClient.get<UserDataModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/user');
  }
}
