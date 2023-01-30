import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestowyComponent } from './components/testowy/testowy.component';
import { CandidatesComponent } from './components/candidates/candidates.component';
import { CandidatesDetailsComponent } from './components/candidates-details/candidates-details.component';
import { TestowyComponentModule } from './components/testowy/testowy.component-module';
import { CandidatesComponentModule } from './components/candidates/candidates.component-module';
import { CandidatesServiceModule } from './services/candidates.service-module';
import { CandidatesDetailsComponentModule } from './components/candidates-details/candidates-details.component-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'test', component: TestowyComponent },
    { path: '', component: CandidatesComponent },
    { path: 'candidate/:id', component: CandidatesDetailsComponent }
  ]), TestowyComponentModule, CandidatesComponentModule, CandidatesServiceModule, CandidatesDetailsComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
