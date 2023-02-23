import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductChipListComponent } from './components/product-chip-list/product-chip-list.component';
import { JobPostSearchComponent } from './components/job-post-search/job-post-search.component';
import { ProductChipListComponentModule } from './components/product-chip-list/product-chip-list.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { JobPostSearchComponentModule } from './components/job-post-search/job-post-search.component-module';
import { JobPostServiceModule } from './services/job-post.service-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'list 2-route-sort-single-products-backend', component: ProductChipListComponent },
    { path: 'search-route-multi-jobs', component: JobPostSearchComponent }
  ]), ProductChipListComponentModule, ProductServiceModule, JobPostSearchComponentModule, JobPostServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
