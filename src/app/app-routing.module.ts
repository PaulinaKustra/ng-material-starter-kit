import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { JobPostComponent } from './components/job-post/job-post.component';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';
import { UserFilterComponent } from './components/user-filter/user-filter.component';
import { UniversitiesComponent } from './components/universities/universities.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { CryptoChipsComponent } from './components/crypto-chips/crypto-chips.component';
import { CarsComponent } from './components/cars/cars.component';
import { ProductsComponentModule } from './components/products/products.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { JobPostComponentModule } from './components/job-post/job-post.component-module';
import { JobPostServiceModule } from './services/job-post.service-module';
import { ProductCategoriesComponentModule } from './components/product-categories/product-categories.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { UserFilterComponentModule } from './components/user-filter/user-filter.component-module';
import { UserServiceModule } from './services/user.service-module';
import { RoleServiceModule } from './services/role.service-module';
import { DepartmentsServiceModule } from './services/departments.service-module';
import { UniversitiesComponentModule } from './components/universities/universities.component-module';
import { UniversityServiceModule } from './services/university.service-module';
import { ProductSearchComponentModule } from './components/product-search/product-search.component-module';
import { CryptoChipsComponentModule } from './components/crypto-chips/crypto-chips.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { CarsComponentModule } from './components/cars/cars.component-module';
import { CarServiceModule } from './services/car.service-module';
import { CarBrandServiceModule } from './services/car-brand.service-module';
import { SecurityFeaturesServiceModule } from './services/security-features.service-module';
import { ComfortFeaturesServiceModule } from './services/comfort-features.service-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'list-2-form-sorting-single-product', component: ProductsComponent },
    { path: 'list-2-form-sorting-multi-jobs', component: JobPostComponent },
    { path: 'list-2-form-filtering-single', component: ProductCategoriesComponent },
    { path: 'list-2-form-filter-multi-users', component: UserFilterComponent },
    { path: 'search-single-university-backend', component: UniversitiesComponent },
    { path: 'list-2-form-search-multi-product', component: ProductSearchComponent },
    { path: 'list-2-autocomplete-single-crypto-chips', component: CryptoChipsComponent },
    { path: 'form-2-autocomplete-multi-cars', component: CarsComponent }
  ]), ProductsComponentModule, ProductServiceModule, JobPostComponentModule, JobPostServiceModule, ProductCategoriesComponentModule, CategoryServiceModule, UserFilterComponentModule, UserServiceModule, RoleServiceModule, DepartmentsServiceModule, UniversitiesComponentModule, UniversityServiceModule, ProductSearchComponentModule, CryptoChipsComponentModule, CryptoServiceModule, CarsComponentModule, CarServiceModule, CarBrandServiceModule, SecurityFeaturesServiceModule, ComfortFeaturesServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
