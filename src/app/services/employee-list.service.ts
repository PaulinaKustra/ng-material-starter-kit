import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';

@Injectable()
export class EmployeeListService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient.get<EmployeeModel[]>('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001');
  }
}
