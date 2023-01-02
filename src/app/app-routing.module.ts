import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';
import { ProductsComponentModule } from './components/products/products.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { ProductCategoriesComponentModule } from './components/product-categories/product-categories.component-module';
import { ProductCategoriesServiceModule } from './services/product-categories.service-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'products', component: ProductsComponent },
    { path: 'categories', component: ProductCategoriesComponent }]),
    ProductsComponentModule, ProductsServiceModule, ProductCategoriesComponentModule, ProductCategoriesServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
