import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { InfluencersModel } from '../../models/influencers.model';
import { InfluencersService } from '../../services/influencers.service';
import {NestedTreeControl} from "@angular/cdk/tree";

@Component({
  selector: 'app-influencer-tree',
  styleUrls: ['./influencer-tree.component.scss'],
  templateUrl: './influencer-tree.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfluencerTreeComponent {
  readonly influTree$: Observable<InfluencersModel[]> = this._influencersService.getAll();
  treeControl = new NestedTreeControl<InfluencersModel>(node => node.followedBy);

  constructor(private _influencersService: InfluencersService) {
  }
  hasChild = (_: number, node: InfluencersModel) => !!node.followedBy && node.followedBy.length > 0;
}
