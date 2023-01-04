import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { CategoriesCheckboxComponent } from './components/categories-checkbox/categories-checkbox.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { CryptoRadioComponent } from './components/crypto-radio/crypto-radio.component';
import { HolidaysSelectionComponent } from './components/holidays-selection/holidays-selection.component';
import { EmployeeListComponentModule } from './components/employee-list/employee-list.component-module';
import { EmployeeListServiceModule } from './services/employee-list.service-module';
import { CryptoListComponentModule } from './components/crypto-list/crypto-list.component-module';
import { CryptoListServiceModule } from './services/crypto-list.service-module';
import { CategoriesCheckboxComponentModule } from './components/categories-checkbox/categories-checkbox.component-module';
import { CategoriesCheckboxServiceModule } from './services/categories-checkbox.service-module';
import { CategoriesMenuComponentModule } from './components/categories-menu/categories-menu.component-module';
import { CryptoRadioComponentModule } from './components/crypto-radio/crypto-radio.component-module';
import { HolidaysSelectionComponentModule } from './components/holidays-selection/holidays-selection.component-module';
import { HolidaysSelectionServiceModule } from './services/holidays-selection.service-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'employees', component: EmployeeListComponent },
    { path: 'crypto', component: CryptoListComponent },
    { path: 'categories', component: CategoriesCheckboxComponent },
    { path: 'categories-menu', component: CategoriesMenuComponent },
    { path: 'crypto-radio', component: CryptoRadioComponent },
    { path: 'public-holidays', component: HolidaysSelectionComponent }
  ]), EmployeeListComponentModule, EmployeeListServiceModule, CryptoListComponentModule, CryptoListServiceModule, CategoriesCheckboxComponentModule, CategoriesCheckboxServiceModule, CategoriesMenuComponentModule, CryptoRadioComponentModule, HolidaysSelectionComponentModule, HolidaysSelectionServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
