import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateEmployeeModel } from '../models/create-employee.model';

@Injectable()
export class CreateEmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  create(employee: Omit<CreateEmployeeModel, 'id'>): Observable<CreateEmployeeModel> {
    return this._httpClient.post<CreateEmployeeModel>('https://dummy.restapiexample.com/api/v1/create', employee);
  }
}
