import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { EmployeeListComponentModule } from './components/employee-list/employee-list.component-module';
import { EmployeeListServiceModule } from './services/employee-list.service-module';
import { CryptoListComponentModule } from './components/crypto-list/crypto-list.component-module';
import { CryptoListServiceModule } from './services/crypto-list.service-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'employees', component: EmployeeListComponent },
    { path: 'crypto', component: CryptoListComponent }]),
    EmployeeListComponentModule, EmployeeListServiceModule, CryptoListComponentModule, CryptoListServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
