import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductChipListComponent } from './components/product-chip-list/product-chip-list.component';
import { ProductChipListComponentModule } from './components/product-chip-list/product-chip-list.component-module';
import { ProductServiceModule } from './services/product.service-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'list 2-route-sort-single-products-backend', component: ProductChipListComponent }]),
    ProductChipListComponentModule, ProductServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
