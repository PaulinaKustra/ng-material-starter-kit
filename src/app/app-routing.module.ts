import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CatFactComponent } from './components/cat-fact/cat-fact.component';
import { CatFactComponentModule } from './components/cat-fact/cat-fact.component-module';
import { CatFactServiceModule } from './services/cat-fact.service-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'cat-fact', component: CatFactComponent }]), CatFactComponentModule, CatFactServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
