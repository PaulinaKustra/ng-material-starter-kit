import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NamesComponent } from './components/names/names.component';
import { AgeComponent } from './components/age/age.component';
import { EmailComponent } from './components/email/email.component';
import { CommentsComponent } from './components/comments/comments.component';
import { UserRolesFormComponent } from './components/user-roles-form/user-roles-form.component';
import { UniversitiesRadioComponent } from './components/universities-radio/universities-radio.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NamesComponentModule } from './components/names/names.component-module';
import { AgeComponentModule } from './components/age/age.component-module';
import { EmailComponentModule } from './components/email/email.component-module';
import { CommentsComponentModule } from './components/comments/comments.component-module';
import { UserRolesFormComponentModule } from './components/user-roles-form/user-roles-form.component-module';
import { UsersServiceModule } from './services/users.service-module';
import { UniversitiesRadioComponentModule } from './components/universities-radio/universities-radio.component-module';
import { UniversitiesServiceModule } from './services/universities.service-module';
import { LoginFormComponentModule } from './components/login-form/login-form.component-module';
import { LoginFormServiceModule } from './services/login-form.service-module';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { ProductFormServiceModule } from './services/product-form.service-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'form', component: NamesComponent },
    { path: 'age', component: AgeComponent },
    { path: 'email-form', component: EmailComponent },
    { path: 'comments', component: CommentsComponent },
    { path: 'users', component: UserRolesFormComponent },
    { path: 'universities', component: UniversitiesRadioComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'product-form', component: ProductFormComponent }
  ]), NamesComponentModule, AgeComponentModule, EmailComponentModule, CommentsComponentModule, UserRolesFormComponentModule, UsersServiceModule, UniversitiesRadioComponentModule, UniversitiesServiceModule, LoginFormComponentModule, LoginFormServiceModule, ProductFormComponentModule, ProductFormServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
