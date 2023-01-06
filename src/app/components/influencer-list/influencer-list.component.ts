import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { InfluencersModel } from '../../models/influencers.model';
import { InfluencersService } from '../../services/influencers.service';

@Component({
  selector: 'app-influencer-list',
  styleUrls: ['./influencer-list.component.scss'],
  templateUrl: './influencer-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfluencerListComponent {
  readonly influData$: Observable<InfluencersModel[]> = this._influencersService.getAll();

  constructor(private _influencersService: InfluencersService) {
  }
}
