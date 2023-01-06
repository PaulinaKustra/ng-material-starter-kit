import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { InfluencerListComponent } from './influencer-list.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatChipsModule],
  declarations: [InfluencerListComponent],
  providers: [],
  exports: [InfluencerListComponent]
})
export class InfluencerListComponentModule {
}
