import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfluencersModel } from '../models/influencers.model';

@Injectable()
export class InfluencersService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<InfluencersModel[]> {
    return this._httpClient.get<InfluencersModel[]>('https://6384fca14ce192ac60696c4b.mockapi.io/influecers-with-followers');
  }
}
