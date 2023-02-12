import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { ProductPriceComponent } from './components/product-price/product-price.component';
import { ProductsComponentModule } from './components/products/products.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { ProductServiceModule } from './services/product.service-module';
import { UsersComponentModule } from './components/users/users.component-module';
import { UserRoleServiceModule } from './services/user-role.service-module';
import { UserServiceModule } from './services/user.service-module';
import { ProductPriceComponentModule } from './components/product-price/product-price.component-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'products', component: ProductsComponent },
    { path: 'users', component: UsersComponent },
    { path: 'sorted-products', component: ProductPriceComponent }
  ]), ProductsComponentModule, CategoryServiceModule, ProductServiceModule, UsersComponentModule, UserRoleServiceModule, UserServiceModule, ProductPriceComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
