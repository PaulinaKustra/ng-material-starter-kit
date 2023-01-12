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
import { UserFormComponent } from './components/user-form/user-form.component';
import { UsersRadioComponent } from './components/users-radio/users-radio.component';
import { UserGenderRadioComponent } from './components/user-gender-radio/user-gender-radio.component';
import { UserNestedFormComponent } from './components/user-nestedform/user-nested-form.component';
import { NestedOrderComponent } from './components/nested-order/nested-order.component';
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
import { UserFormComponentModule } from './components/user-form/user-form.component-module';
import { UsersRadioComponentModule } from './components/users-radio/users-radio.component-module';
import { UserGenderRadioComponentModule } from './components/user-gender-radio/user-gender-radio.component-module';
import { UserNestedformComponentModule } from './components/user-nestedform/user-nestedform.component-module';
import { NestedOrderComponentModule } from './components/nested-order/nested-order.component-module';
import { NestedOrderServiceModule } from './services/nested-order.service-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'form', component: NamesComponent },
    { path: 'age', component: AgeComponent },
    { path: 'email-form', component: EmailComponent },
    { path: 'comments', component: CommentsComponent },
    { path: 'users', component: UserRolesFormComponent },
    { path: 'universities', component: UniversitiesRadioComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'product-form', component: ProductFormComponent },
    { path: 'user-roles', component: UserFormComponent },
    { path: 'users-radio', component: UsersRadioComponent },
    { path: 'gender', component: UserGenderRadioComponent },
    { path: 'nested-user-form', component: UserNestedFormComponent },
    { path: 'nested-order', component: NestedOrderComponent }
  ]), NamesComponentModule, AgeComponentModule, EmailComponentModule, CommentsComponentModule, UserRolesFormComponentModule, UsersServiceModule, UniversitiesRadioComponentModule, UniversitiesServiceModule, LoginFormComponentModule, LoginFormServiceModule, ProductFormComponentModule, ProductFormServiceModule, UserFormComponentModule, UsersRadioComponentModule, UserGenderRadioComponentModule, UserNestedformComponentModule, NestedOrderComponentModule, NestedOrderServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
