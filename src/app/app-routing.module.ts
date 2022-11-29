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
        { path: 'create-employee', component: CreateEmployeeComponent }
      ]
    ), ProductListComponentModule, ProductsServiceModule, CategoryListComponentModule, CategoriesServiceModule, CryptoChipsComponentModule, CryptoServiceModule, PublicHolidaysComponentModule, PublicHolidaysServiceModule, CategoriesCheckboxComponentModule, CategoriesMenuComponentModule, ProductFormComponentModule, CreateEmployeeComponentModule, CreateEmployeeServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

