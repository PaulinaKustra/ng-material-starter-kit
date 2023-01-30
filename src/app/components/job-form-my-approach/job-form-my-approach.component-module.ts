import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { JobFormMyApproachComponent } from './job-form-my-approach.component';
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
    imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, MatCheckboxModule],
  declarations: [JobFormMyApproachComponent],
  providers: [],
  exports: [JobFormMyApproachComponent]
})
export class JobFormMyApproachComponentModule {
}
