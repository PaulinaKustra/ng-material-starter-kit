export interface Product {
  productId: number;
  quantity: number;
}

export interface CartModel {
  id: number;
  userId: number;
  date: Date;
  products: Product[];
  __v: number;
}
