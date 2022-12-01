import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CryptoChipsComponent } from './components/crypto-chips/crypto-chips.component';
import { PublicHolidaysComponent } from './components/public-holidays/public-holidays.component';
import { CategoriesCheckboxComponent } from './components/categories-checkbox/categories-checkbox.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CatFactComponent } from './components/cat-fact/cat-fact.component';
import { AgeComponent } from './components/age/age.component';
import { CartComponent } from './components/cart/cart.component';
import { UserComponent } from './components/user/user.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoryListComponentModule } from './components/category-list/category-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CryptoChipsComponentModule } from './components/crypto-chips/crypto-chips.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { PublicHolidaysComponentModule } from './components/public-holidays/public-holidays.component-module';
import { PublicHolidaysServiceModule } from './services/public-holidays.service-module';
import { CategoriesCheckboxComponentModule } from './components/categories-checkbox/categories-checkbox.component-module';
import { CategoriesMenuComponentModule } from './components/categories-menu/categories-menu.component-module';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { CreateEmployeeComponentModule } from './components/create-employee/create-employee.component-module';
import { CreateEmployeeServiceModule } from './services/create-employee.service-module';
import { LoginFormComponentModule } from './components/login-form/login-form.component-module';
import { LoginFormServiceModule } from './services/login-form.service-module';
import { RegisterFormComponentModule } from './components/register-form/register-form.component-module';
import { RegisterFormServiceModule } from './services/register-form.service-module';
import { ProductDetailComponentModule } from './components/product-detail/product-detail.component-module';
import { CatFactComponentModule } from './components/cat-fact/cat-fact.component-module';
import { CatFactServiceModule } from './services/cat-fact.service-module';
import { AgeComponentModule } from './components/age/age.component-module';
import { AgeServiceModule } from './services/age.service-module';
import { CartComponentModule } from './components/cart/cart.component-module';
import { CartServiceModule } from './services/cart.service-module';
import { UserComponentModule } from './components/user/user.component-module';
import { UserServiceModule } from './services/user.service-module';

@NgModule({
  imports: [RouterModule.forRoot
    (
      [
        { path: 'products', component: ProductListComponent },
        { path: 'categories', component: CategoryListComponent },
        { path: 'crypto', component: CryptoChipsComponent },
        { path: 'public-holidays', component: PublicHolidaysComponent },
        { path: 'checkbox-categories', component: CategoriesCheckboxComponent },
        { path: 'categories-menu', component: CategoriesMenuComponent },
        { path: 'product-search', component: ProductTableComponent },
        { path: 'create-product', component: ProductFormComponent },
        { path: 'create-employee', component: CreateEmployeeComponent },
        { path: 'login', component: LoginFormComponent },
        { path: 'register', component: RegisterFormComponent },
        { path: 'product/:id', component: ProductDetailComponent },
        { path: 'cat-fact', component: CatFactComponent },
        { path: 'age/:name', component: AgeComponent },
        { path: 'cart/:id', component: CartComponent },
        { path: 'user/:id', component: UserComponent }
      ]
    ), ProductListComponentModule, ProductsServiceModule, CategoryListComponentModule, CategoriesServiceModule, CryptoChipsComponentModule, CryptoServiceModule, PublicHolidaysComponentModule, PublicHolidaysServiceModule, CategoriesCheckboxComponentModule, CategoriesMenuComponentModule, ProductFormComponentModule, CreateEmployeeComponentModule, CreateEmployeeServiceModule, LoginFormComponentModule, LoginFormServiceModule, RegisterFormComponentModule, RegisterFormServiceModule, ProductDetailComponentModule, CatFactComponentModule, CatFactServiceModule, AgeComponentModule, AgeServiceModule, CartComponentModule, CartServiceModule, UserComponentModule, UserServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

