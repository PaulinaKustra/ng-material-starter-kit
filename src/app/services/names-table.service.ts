import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class NamesTableService {
  constructor(private _httpClient: HttpClient) {
  }
  data : string[] = ['John','Anna','Ted','Emma'];
  getAll(): Observable<string[]>
  {
    return of(this.data);
  }
}
