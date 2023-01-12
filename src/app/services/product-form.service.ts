import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ProductFormModel} from "../models/product-form.model";

@Injectable()
export class ProductFormService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllCategories(): Observable<string[]> {
    return this._httpClient.get<string[]>('https://fakestoreapi.com/products/categories');
  }

  submit(product: ProductFormModel){
    this._httpClient.post<any>('https://fakestoreapi.com/products', product).subscribe(data => {
      console.log("product submitted", data);
    })
  }

}
