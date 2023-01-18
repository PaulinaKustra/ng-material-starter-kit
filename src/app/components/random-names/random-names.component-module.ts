import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { RandomNamesComponent } from './random-names.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [MatListModule, CommonModule, MatIconModule, MatButtonModule],
  declarations: [RandomNamesComponent],
  providers: [],
  exports: [RandomNamesComponent]
})
export class RandomNamesComponentModule {
}
