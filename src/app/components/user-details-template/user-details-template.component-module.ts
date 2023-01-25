import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { UserDetailsTemplateComponent } from './user-details-template.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [UserDetailsTemplateComponent],
  providers: [],
  exports: [UserDetailsTemplateComponent]
})
export class UserDetailsTemplateComponentModule {
}
