import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {OrderProductsModel} from "../models/order-products.model";
import {OrderCitiesModel} from "../models/order-cities.model";
import {OrderCountriesModel} from "../models/order-countries.model";
import {OrderModel} from "../models/order.model";

@Injectable()
export class NestedOrderService {
  getAllProducts(): Observable<OrderProductsModel[]> {
    return this._httpClient.get<OrderProductsModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/products');
  }
  getAllCities(): Observable<OrderCitiesModel[]> {
    return this._httpClient.get<OrderCitiesModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/cities');
  }
  getAllCountries(): Observable<OrderCountriesModel[]> {
    return this._httpClient.get<OrderCountriesModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/countries');
  }
  constructor(private _httpClient: HttpClient) {
  }


  submitOrder(order: OrderModel){       //todo: fix endpoint
    this._httpClient.post<any>('https://636ce2d8ab4814f2b2712854.mockapi.io/orders', order).subscribe(data => {
      console.log("order submitted", data);
    })
  }
}
