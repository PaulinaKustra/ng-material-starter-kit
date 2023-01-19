import {ProductsModel} from "./products.model";

export interface ProductDialogModel {
  selectedProduct : ProductsModel,
  siblingsProducts : ProductsModel[]
}
