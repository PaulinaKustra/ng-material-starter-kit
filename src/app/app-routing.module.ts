import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CatFactComponent } from './components/cat-fact/cat-fact.component';
import { AgePredictionComponent } from './components/age-prediction/age-prediction.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserDetailsTemplateComponent } from './components/user-details-template/user-details-template.component';
import { JobTagsComponent } from './components/job-tags/job-tags.component';
import { JobFormComponent } from './components/job-form/job-form.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { CatFactComponentModule } from './components/cat-fact/cat-fact.component-module';
import { CatFactServiceModule } from './services/cat-fact.service-module';
import { AgePredictionComponentModule } from './components/age-prediction/age-prediction.component-module';
import { AgePredictionServiceModule } from './services/age-prediction.service-module';
import { ProductDetailsComponentModule } from './components/product-details/product-details.component-module';
import { ProductDetailsServiceModule } from './services/product-details.service-module';
import { CartDetailsComponentModule } from './components/cart-details/cart-details.component-module';
import { CartServiceModule } from './services/cart.service-module';
import { UserDetailsComponentModule } from './components/user-details/user-details.component-module';
import { UserDetailsServiceModule } from './services/user-details.service-module';
import { UserDetailsTemplateComponentModule } from './components/user-details-template/user-details-template.component-module';
import { JobTagsComponentModule } from './components/job-tags/job-tags.component-module';
import { JobTagsServiceModule } from './services/job-tags.service-module';
import { JobFormComponentModule } from './components/job-form/job-form.component-module';
import { ProductEditComponentModule } from './components/product-edit/product-edit.component-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'cat-fact', component: CatFactComponent },
    { path: 'age/:name', component: AgePredictionComponent },
    { path: 'product/:id', component: ProductDetailsComponent },
    { path: 'cart/:id', component: CartDetailsComponent },
    { path: 'user/:id', component: UserDetailsComponent },
    { path: 'user-template', component: UserDetailsTemplateComponent },
    { path: 'edit-tag/:id', component: JobTagsComponent },
    { path: 'edit-job/:id', component: JobFormComponent },
    { path: 'edit-product/:id', component: ProductEditComponent }
  ]), CatFactComponentModule, CatFactServiceModule, AgePredictionComponentModule, AgePredictionServiceModule, ProductDetailsComponentModule, ProductDetailsServiceModule, CartDetailsComponentModule, CartServiceModule, UserDetailsComponentModule, UserDetailsServiceModule, UserDetailsTemplateComponentModule, JobTagsComponentModule, JobTagsServiceModule, JobFormComponentModule, ProductEditComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
