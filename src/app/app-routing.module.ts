import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NamesComponent } from './components/names/names.component';
import { AgeComponent } from './components/age/age.component';
import { NamesComponentModule } from './components/names/names.component-module';
import { AgeComponentModule } from './components/age/age.component-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'form', component: NamesComponent },
    { path: 'age', component: AgeComponent }
  ]), NamesComponentModule, AgeComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
