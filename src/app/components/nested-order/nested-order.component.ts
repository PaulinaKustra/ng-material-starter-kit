import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { OrderProductsModel } from '../../models/order-products.model';
import { OrderCitiesModel } from '../../models/order-cities.model';
import { OrderCountriesModel } from '../../models/order-countries.model';
import { NestedOrderService } from '../../services/nested-order.service';
import {OrderModel} from "../../models/order.model";

@Component({
  selector: 'app-nested-order',
  styleUrls: ['./nested-order.component.scss'],
  templateUrl: './nested-order.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NestedOrderComponent {
  readonly quantity$: Observable<number[]> = quantity;
  readonly deliveryTime$: Observable<string[]> = deliveryTime;
  readonly products$: Observable<OrderProductsModel[]> = this._nestedOrderService.getAllProducts();
  readonly cities$: Observable<OrderCitiesModel[]> = this._nestedOrderService.getAllCities();
  readonly countries$: Observable<OrderCountriesModel[]> = this._nestedOrderService.getAllCountries();

  readonly invoiceForm: FormGroup = new FormGroup({
    address: new FormControl('', [Validators.required]),
    extraAddress: new FormControl('', [Validators.required]),
    vatNumber: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required])
  })
  readonly shippingForm: FormGroup = new FormGroup({
    houseNumber: new FormControl('', [Validators.required]),
    zipcode: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    deliveryTime: new FormControl('', [Validators.required])
  })
  readonly orderForm: FormGroup = new FormGroup({
    product: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    shipping: this.shippingForm,
    invoice: this.invoiceForm
  });

  constructor(private _nestedOrderService: NestedOrderService) {
  }

  onOrderFormSubmitted(orderForm: FormGroup): void {
    let order : OrderModel= {
      productId: this.orderForm.get('product')?.value,
      quantity: this.orderForm.get('quantity')?.value,
      invoice :{
        addressLine: this.invoiceForm.get('address')?.value,
        country: this.invoiceForm.get('country')?.value,
        extraAddressLine: this.invoiceForm.get('extraAddress')?.value,
        vatNumber: this.invoiceForm.get('vatNumber')?.value,
      },
      shipping: {
        cityId: this.shippingForm.get('city')?.value,
        deliveryTime: this.shippingForm.get('deliveryTime')?.value,
        houseNumber: this.shippingForm.get('houseNumber')?.value,
        street: this.shippingForm.get('street')?.value,
        zipCode: this.shippingForm.get('zipcode')?.value,
      }
    } as OrderModel;
    console.log('user ', JSON.stringify(order))


    this._nestedOrderService.submitOrder(order);
  }

}
const quantity = of([1, 2, 3, 4, 5]);
const deliveryTime = of(["8-13", "13-18", "19-23"]);

