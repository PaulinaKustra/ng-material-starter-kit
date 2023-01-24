import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CatFactComponent } from './components/cat-fact/cat-fact.component';
import { AgePredictionComponent } from './components/age-prediction/age-prediction.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CatFactComponentModule } from './components/cat-fact/cat-fact.component-module';
import { CatFactServiceModule } from './services/cat-fact.service-module';
import { AgePredictionComponentModule } from './components/age-prediction/age-prediction.component-module';
import { AgePredictionServiceModule } from './services/age-prediction.service-module';
import { ProductDetailsComponentModule } from './components/product-details/product-details.component-module';
import { ProductDetailsServiceModule } from './services/product-details.service-module';
import { CartDetailsComponentModule } from './components/cart-details/cart-details.component-module';
import { CartServiceModule } from './services/cart.service-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'cat-fact', component: CatFactComponent },
    { path: 'age/:name', component: AgePredictionComponent },
    { path: 'product/:id', component: ProductDetailsComponent },
    { path: 'cart/:id', component: CartDetailsComponent }
  ]), CatFactComponentModule, CatFactServiceModule, AgePredictionComponentModule, AgePredictionServiceModule, ProductDetailsComponentModule, ProductDetailsServiceModule, CartDetailsComponentModule, CartServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
