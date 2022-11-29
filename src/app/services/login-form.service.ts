import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginFormModel } from '../models/login-form.model';

@Injectable()
export class LoginFormService {
  constructor(private _httpClient: HttpClient) {
  }

  create(login: Omit<LoginFormModel, 'id'>): Observable<LoginFormModel> {
    return this._httpClient.post<LoginFormModel>('https://fakestoreapi.com/auth/login', login);

  }
}
