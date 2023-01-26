import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductDetailsModel } from '../models/product-details.model';

@Injectable()
export class ProductDetailsService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(id: number): Observable<ProductDetailsModel> {
    return this._httpClient.get<ProductDetailsModel>('https://fakestoreapi.com/products/' + id);
  }

  getAll(): Observable<string[]> {
    return this._httpClient.get<string[]>('https://fakestoreapi.com/products/categories');
  }

  update(product: ProductDetailsModel): Observable<ProductDetailsModel> {
    return this._httpClient.put<ProductDetailsModel>('https://fakestoreapi.com/products/' + product.id, product);
  }
}
