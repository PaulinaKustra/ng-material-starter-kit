import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AgeComponent } from './age.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [AgeComponent],
  providers: [],
  exports: [AgeComponent]
})
export class AgeComponentModule {
}
