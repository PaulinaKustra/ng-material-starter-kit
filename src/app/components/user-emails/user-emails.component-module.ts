import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { UserEmailsComponent } from './user-emails.component';

@NgModule({
  imports: [MatCardModule, MatListModule, FlexModule, CommonModule],
  declarations: [UserEmailsComponent],
  providers: [],
  exports: [UserEmailsComponent]
})
export class UserEmailsComponentModule {
}
