import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ComfortFeatureModel } from '../models/comfort-feature.model';

@Injectable()
export class ComfortFeaturesService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<ComfortFeatureModel[]> {
    return this._httpClient.get<ComfortFeatureModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/car-comfort-features');
  }
}
