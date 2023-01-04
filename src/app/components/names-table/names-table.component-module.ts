import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { NamesTableComponent } from './names-table.component';

@NgModule({
  imports: [
    MatTableModule,
    CommonModule
  ],
  declarations: [NamesTableComponent],
  providers: [],
  exports: [NamesTableComponent]
})
export class NamesTableComponentModule {
}
