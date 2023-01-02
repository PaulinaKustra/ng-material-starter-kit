import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';
import { CryptoChipsComponent } from './components/crypto-chips/crypto-chips.component';
import { ProductsComponentModule } from './components/products/products.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { ProductCategoriesComponentModule } from './components/product-categories/product-categories.component-module';
import { ProductCategoriesServiceModule } from './services/product-categories.service-module';
import { CryptoChipsComponentModule } from './components/crypto-chips/crypto-chips.component-module';
import { CryptoChipsServiceModule } from './services/crypto-chips.service-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'products', component: ProductsComponent },
    { path: 'categories', component: ProductCategoriesComponent },
    { path: 'crypto', component: CryptoChipsComponent }
  ]), ProductsComponentModule, ProductsServiceModule, ProductCategoriesComponentModule, ProductCategoriesServiceModule, CryptoChipsComponentModule, CryptoChipsServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
