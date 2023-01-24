import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CatFactComponent } from './components/cat-fact/cat-fact.component';
import { AgePredictionComponent } from './components/age-prediction/age-prediction.component';
import { CatFactComponentModule } from './components/cat-fact/cat-fact.component-module';
import { CatFactServiceModule } from './services/cat-fact.service-module';
import { AgePredictionComponentModule } from './components/age-prediction/age-prediction.component-module';
import { AgePredictionServiceModule } from './services/age-prediction.service-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'cat-fact', component: CatFactComponent },
    { path: 'age/:name', component: AgePredictionComponent }
  ]), CatFactComponentModule, CatFactServiceModule, AgePredictionComponentModule, AgePredictionServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
