import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRoleModel } from '../models/user-role.model';

@Injectable()
export class UserRoleService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<UserRoleModel[]> {
    return this._httpClient.get<UserRoleModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/roles');
  }
}
