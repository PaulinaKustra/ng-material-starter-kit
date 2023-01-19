import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { UsersDepartmentComponent } from './users-department.component';
import {MatChipsModule} from "@angular/material/chips";

@NgModule({
  imports: [MatListModule, CommonModule, MatChipsModule],
  declarations: [UsersDepartmentComponent],
  providers: [],
  exports: [UsersDepartmentComponent]
})
export class UsersDepartmentComponentModule {
}
