import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RandomNumberComponent } from './components/random-number/random-number.component';
import { RandomNamesComponent } from './components/random-names/random-names.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { CatFactComponent } from './components/cat-fact/cat-fact.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CryptoCurrencyComponent } from './components/crypto-currency/crypto-currency.component';
import { UsersComponent } from './components/users/users.component';
import { ProductExternalComponent } from './components/product-external/product-external.component';
import { ProductSnackbarComponent } from './components/product-snackbar/product-snackbar.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { JobPostsComponent } from './components/job-posts/job-posts.component';
import { UsersDepartmentComponent } from './components/users-department/users-department.component';
import { RandomNumberComponentModule } from './components/random-number/random-number.component-module';
import { RandomNamesComponentModule } from './components/random-names/random-names.component-module';
import { UsersTableComponentModule } from './components/users-table/users-table.component-module';
import { CatFactComponentModule } from './components/cat-fact/cat-fact.component-module';
import { CatFactServiceModule } from './services/cat-fact.service-module';
import { CountryListComponentModule } from './components/country-list/country-list.component-module';
import { CountriesServiceModule } from './services/countries.service-module';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { ProductDetailsComponentModule } from './components/product-details/product-details.component-module';
import { CryptoCurrencyComponentModule } from './components/crypto-currency/crypto-currency.component-module';
import { CryptoCurrencyServiceModule } from './services/crypto-currency.service-module';
import { UsersComponentModule } from './components/users/users.component-module';
import { UsersServiceModule } from './services/users.service-module';
import { ProductExternalComponentModule } from './components/product-external/product-external.component-module';
import { ProductSnackbarComponentModule } from './components/product-snackbar/product-snackbar.component-module';
import { ProductSnackbarServiceModule } from './services/product-snackbar.service-module';
import { ProductCategoryComponentModule } from './components/product-category/product-category.component-module';
import { JobPostsComponentModule } from './components/job-posts/job-posts.component-module';
import { JobPostsServiceModule } from './services/job-posts.service-module';
import { UsersDepartmentComponentModule } from './components/users-department/users-department.component-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'random-number', component: RandomNumberComponent },
    { path: 'random-names', component: RandomNamesComponent },
    { path: 'users', component: UsersTableComponent },
    { path: 'cat-fact', component: CatFactComponent },
    { path: 'countries', component: CountryListComponent },
    { path: 'refresh-products', component: ProductListComponent },
    { path: 'product-details', component: ProductDetailsComponent },
    { path: 'crypto-master-details', component: CryptoCurrencyComponent },
    { path: 'users-chips', component: UsersComponent },
    { path: 'products-master-details', component: ProductExternalComponent },
    { path: 'product-snackbar', component: ProductSnackbarComponent },
    { path: 'list-2-subject-master-details-get-all', component: ProductCategoryComponent },
    { path: 'list-2-subject-master-details-get-one-different-model', component: JobPostsComponent },
    { path: 'users-department', component: UsersDepartmentComponent }
  ]), RandomNumberComponentModule, RandomNamesComponentModule, UsersTableComponentModule, CatFactComponentModule, CatFactServiceModule, CountryListComponentModule, CountriesServiceModule, ProductListComponentModule, ProductsServiceModule, ProductDetailsComponentModule, CryptoCurrencyComponentModule, CryptoCurrencyServiceModule, UsersComponentModule, UsersServiceModule, ProductExternalComponentModule, ProductSnackbarComponentModule, ProductSnackbarServiceModule, ProductCategoryComponentModule, JobPostsComponentModule, JobPostsServiceModule, UsersDepartmentComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
