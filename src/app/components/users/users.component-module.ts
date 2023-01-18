import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UsersComponent } from './users.component';

@NgModule({
  imports: [MatChipsModule, CommonModule, MatButtonModule, MatIconModule],
  declarations: [UsersComponent],
  providers: [],
  exports: [UsersComponent]
})
export class UsersComponentModule {
}
