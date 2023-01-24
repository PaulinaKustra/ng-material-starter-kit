import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AgePredictionComponent } from './age-prediction.component';
import {RouterLink} from "@angular/router";

@NgModule({
  imports: [MatCardModule, CommonModule, RouterLink],
  declarations: [AgePredictionComponent],
  providers: [],
  exports: [AgePredictionComponent]
})
export class AgePredictionComponentModule {
}
