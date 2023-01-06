import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InfluencerTreeComponent } from './influencer-tree.component';

@NgModule({
  imports: [MatTreeModule, CommonModule, MatButtonModule, MatIconModule],
  declarations: [InfluencerTreeComponent],
  providers: [],
  exports: [InfluencerTreeComponent]
})
export class InfluencerTreeComponentModule {
}
