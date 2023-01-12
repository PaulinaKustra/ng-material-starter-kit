export interface OrderModel {
  shipping: ShippingModel;
  invoice: InvoiceModel;
  productId: string;
  quantity: number;
}

export interface ShippingModel{
  cityId: string;
  deliveryTime: string;
  houseNumber: number;
  street: string;
  zipCode: string;
}

export interface InvoiceModel{
  addressLine: string;
  country: string;
  extraAddressLine: string;
  vatNumber: string;
}
