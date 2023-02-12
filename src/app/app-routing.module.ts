import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { ProductSortingFeComponent } from './components/product-sorting-fe/product-sorting-fe.component';
import { ProductSortingBeComponent } from './components/product-sorting-be/product-sorting-be.component';
import { UserEmailsComponent } from './components/user-emails/user-emails.component';
import { ProductsComponentModule } from './components/products/products.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { ProductServiceModule } from './services/product.service-module';
import { UsersComponentModule } from './components/users/users.component-module';
import { UserRoleServiceModule } from './services/user-role.service-module';
import { UserServiceModule } from './services/user.service-module';
import { ProductSortingFeComponentModule } from './components/product-sorting-fe/product-sorting-fe.component-module';
import { ProductSortingBeComponentModule } from './components/product-sorting-be/product-sorting-be.component-module';
import { UserEmailsComponentModule } from './components/user-emails/user-emails.component-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'products', component: ProductsComponent },
    { path: 'users', component: UsersComponent },
    { path: 'fe-sorted-products', component: ProductSortingFeComponent },
    { path: 'be-sorted-products', component: ProductSortingBeComponent },
    { path: 'user-emails', component: UserEmailsComponent }
  ]), ProductsComponentModule, CategoryServiceModule, ProductServiceModule, UsersComponentModule, UserRoleServiceModule, UserServiceModule, ProductSortingFeComponentModule, ProductSortingBeComponentModule, UserEmailsComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
