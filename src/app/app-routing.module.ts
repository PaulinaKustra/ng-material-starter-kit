import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { JobPostComponent } from './components/job-post/job-post.component';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';
import { UserFilterComponent } from './components/user-filter/user-filter.component';
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

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'list-2-form-sorting-single-product', component: ProductsComponent },
    { path: 'list-2-form-sorting-multi-jobs', component: JobPostComponent },
    { path: 'list-2-form-filtering-single', component: ProductCategoriesComponent },
    { path: 'list-2-form-filter-multi-users', component: UserFilterComponent }
  ]), ProductsComponentModule, ProductServiceModule, JobPostComponentModule, JobPostServiceModule, ProductCategoriesComponentModule, CategoryServiceModule, UserFilterComponentModule, UserServiceModule, RoleServiceModule, DepartmentsServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
