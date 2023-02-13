import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { UserRoleDepartmentSortingComponent } from './user-role-department-sorting.component';
import { AsyncPipe, NgForOf } from '@angular/common';

@NgModule({
  imports: [
    AsyncPipe,
    NgForOf,
    MatCardModule,
    MatListModule,
    FlexModule,
    CommonModule
  ],
  declarations: [UserRoleDepartmentSortingComponent],
  providers: [],
  exports: [UserRoleDepartmentSortingComponent]
})
export class UserRoleDepartmentSortingComponentModule {
}
