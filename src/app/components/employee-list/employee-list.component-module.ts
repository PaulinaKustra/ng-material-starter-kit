import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { EmployeeListComponent } from './employee-list.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatCardModule],
  declarations: [EmployeeListComponent],
  providers: [],
  exports: [EmployeeListComponent]
})
export class EmployeeListComponentModule {
}
