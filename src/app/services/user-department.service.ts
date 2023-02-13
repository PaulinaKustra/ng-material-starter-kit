import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDepartmentModel } from '../models/user-department.model';

@Injectable()
export class UserDepartmentService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<UserDepartmentModel[]> {
    return this._httpClient.get<UserDepartmentModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/departments');
  }
}
