import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RandomNumberComponent } from './components/random-number/random-number.component';
import { RandomNamesComponent } from './components/random-names/random-names.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { CatFactComponent } from './components/cat-fact/cat-fact.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RandomNumberComponentModule } from './components/random-number/random-number.component-module';
import { RandomNamesComponentModule } from './components/random-names/random-names.component-module';
import { UsersTableComponentModule } from './components/users-table/users-table.component-module';
import { CatFactComponentModule } from './components/cat-fact/cat-fact.component-module';
import { CatFactServiceModule } from './services/cat-fact.service-module';
import { CountryListComponentModule } from './components/country-list/country-list.component-module';
import { CountriesServiceModule } from './services/countries.service-module';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'random-number', component: RandomNumberComponent },
    { path: 'random-names', component: RandomNamesComponent },
    { path: 'users', component: UsersTableComponent },
    { path: 'cat-fact', component: CatFactComponent },
    { path: 'countries', component: CountryListComponent },
    { path: 'refresh-products', component: ProductListComponent }
  ]), RandomNumberComponentModule, RandomNamesComponentModule, UsersTableComponentModule, CatFactComponentModule, CatFactServiceModule, CountryListComponentModule, CountriesServiceModule, ProductListComponentModule, ProductsServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
