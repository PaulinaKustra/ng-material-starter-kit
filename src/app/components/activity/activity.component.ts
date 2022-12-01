import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivityModel } from '../../models/activity.model';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityComponent {
  readonly activity$: Observable<ActivityModel> = this._activatedRoute.data.pipe(
    switchMap(data => this._activityService.getAll()));

  constructor(private _activityService: ActivityService, private _activatedRoute: ActivatedRoute) {
  }
}
