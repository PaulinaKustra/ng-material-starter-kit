import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UserFormComponent } from './user-form.component';
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, MatSelectModule],
  declarations: [UserFormComponent],
  providers: [],
  exports: [UserFormComponent]
})
export class UserFormComponentModule {
}
