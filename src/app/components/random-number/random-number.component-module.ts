import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RandomNumberComponent } from './random-number.component';
import { AsyncPipe } from '@angular/common';

@NgModule({
  imports: [MatButtonModule, MatIconModule, AsyncPipe, MatListModule, CommonModule],
  declarations: [RandomNumberComponent],
  providers: [],
  exports: [RandomNumberComponent]
})
export class RandomNumberComponentModule {
}
