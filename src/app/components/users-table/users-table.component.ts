import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, Observable, switchMap} from 'rxjs';
import { UserDataModel } from 'src/app/models/user-data.model';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-users-table',
  styleUrls: ['./users-table.component.scss'],
  templateUrl: './users-table.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersTableComponent {
  _refreshUsersSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);

  readonly users$: Observable<UserDataModel[]> = this._refreshUsersSubject.asObservable().pipe(switchMap(() => this._userDataService.getAll()));


  onRefreshButtonClicked(){
    this._userDataService.getAll().subscribe(() => this._refreshUsersSubject.next());
  }

  constructor(private _userDataService: UserDataService) {
  }
}
