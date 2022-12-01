import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ActivityComponent } from './activity.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [ActivityComponent],
  providers: [],
  exports: [ActivityComponent]
})
export class ActivityComponentModule {
}
