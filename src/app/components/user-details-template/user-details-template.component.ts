import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable, switchMap} from "rxjs";
import {UserModel} from "../../models/user.model";
import {UserDetailsService} from "../../services/user-details.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-details-template',
  styleUrls: ['./user-details-template.component.scss'],
  templateUrl: './user-details-template.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsTemplateComponent {
  readonly details$: Observable<UserModel> = this._activatedRoute.params.pipe(switchMap((data) => this._userDetailsService.getOne(data['id'])));

  constructor(private _userDetailsService: UserDetailsService, private _activatedRoute: ActivatedRoute) {
  }
}
