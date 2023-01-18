import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { CountryListComponent } from './country-list.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [MatListModule, CommonModule, MatIconModule, MatButtonModule],
  declarations: [CountryListComponent],
  providers: [],
  exports: [CountryListComponent]
})
export class CountryListComponentModule {
}
