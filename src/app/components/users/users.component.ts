import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { UsersService } from '../../services/users.service';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {switchMap} from "rxjs/operators";
import {UsersModel} from "../../models/users.model";

@Component({
  selector: 'app-users',
  styleUrls: ['./users.component.scss'],
  templateUrl: './users.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent {
  private _mainSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  private _detailsSubject: Subject<any> = new Subject<any>();
  public details$: Observable<UsersModel> = this._detailsSubject.asObservable();



  readonly data$: Observable<UsersModel[]> = this._mainSubject.asObservable().pipe(switchMap(() => this._usersService.getAll()));

  onClearButtonClicked()
  {
    this._detailsSubject.next(null);
  }

  onDetailsButtonClicked(selected: UsersModel) {
    this._detailsSubject.next(selected);
  }
  constructor(private _usersService: UsersService) {
  }
}
