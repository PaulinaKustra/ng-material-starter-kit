import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { NamesListComponent } from './names-list.component';

@NgModule({
  imports: [MatListModule, CommonModule],
  declarations: [NamesListComponent],
  providers: [],
  exports: [NamesListComponent]
})
export class NamesListComponentModule {
}
