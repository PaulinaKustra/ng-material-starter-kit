import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { CategoriesCheckboxComponent } from './components/categories-checkbox/categories-checkbox.component';
import { EmployeeListComponentModule } from './components/employee-list/employee-list.component-module';
import { EmployeeListServiceModule } from './services/employee-list.service-module';
import { CryptoListComponentModule } from './components/crypto-list/crypto-list.component-module';
import { CryptoListServiceModule } from './services/crypto-list.service-module';
import { CategoriesCheckboxComponentModule } from './components/categories-checkbox/categories-checkbox.component-module';
import { CategoriesCheckboxServiceModule } from './services/categories-checkbox.service-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'employees', component: EmployeeListComponent },
    { path: 'crypto', component: CryptoListComponent },
    { path: 'categories', component: CategoriesCheckboxComponent }
  ]), EmployeeListComponentModule, EmployeeListServiceModule, CryptoListComponentModule, CryptoListServiceModule, CategoriesCheckboxComponentModule, CategoriesCheckboxServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
