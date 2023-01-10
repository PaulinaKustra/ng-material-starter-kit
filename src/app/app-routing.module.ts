import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NamesComponent } from './components/names/names.component';
import { AgeComponent } from './components/age/age.component';
import { EmailComponent } from './components/email/email.component';
import { CommentsComponent } from './components/comments/comments.component';
import { NamesComponentModule } from './components/names/names.component-module';
import { AgeComponentModule } from './components/age/age.component-module';
import { EmailComponentModule } from './components/email/email.component-module';
import { CommentsComponentModule } from './components/comments/comments.component-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'form', component: NamesComponent },
    { path: 'age', component: AgeComponent },
    { path: 'email-form', component: EmailComponent },
    { path: 'comments', component: CommentsComponent }
  ]), NamesComponentModule, AgeComponentModule, EmailComponentModule, CommentsComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
