import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { JobPostComponent } from './components/job-post/job-post.component';
import { ProductsComponentModule } from './components/products/products.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { JobPostComponentModule } from './components/job-post/job-post.component-module';
import { JobPostServiceModule } from './services/job-post.service-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'list-2-form-sorting-single-product', component: ProductsComponent },
    { path: 'list-2-form-sorting-multi-jobs', component: JobPostComponent }
  ]), ProductsComponentModule, ProductServiceModule, JobPostComponentModule, JobPostServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
