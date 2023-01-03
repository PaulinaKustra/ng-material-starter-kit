import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeListComponentModule } from './components/employee-list/employee-list.component-module';
import { EmployeeListServiceModule } from './services/employee-list.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'employees', component: EmployeeListComponent }]), EmployeeListComponentModule, EmployeeListServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
