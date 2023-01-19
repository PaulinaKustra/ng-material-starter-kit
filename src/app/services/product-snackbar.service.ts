import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ProductSnackbarModel} from "../models/product-snackbar.model";
import {ProductMetadataModel} from "../models/product-metadata.model";

@Injectable()
export class ProductSnackbarService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<ProductSnackbarModel[]> {
    return this._httpClient.get<ProductSnackbarModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/products');
  }
  getMetadata(id: string): Observable<ProductMetadataModel[]> {
    return this._httpClient.get<ProductMetadataModel[]>(`https://636ce2d8ab4814f2b2712854.mockapi.io/products/${id}/product-metadata`);
  }
}
