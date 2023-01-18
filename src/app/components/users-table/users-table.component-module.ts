import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UsersTableComponent } from './users-table.component';

@NgModule({
  imports: [MatTableModule, CommonModule, MatButtonModule, MatIconModule],
  declarations: [UsersTableComponent],
  providers: [],
  exports: [UsersTableComponent]
})
export class UsersTableComponentModule {
}
