import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, combineLatest, map, Observable, Subject} from "rxjs";
import {switchMap} from "rxjs/operators";
import {UserDataModel} from "../../models/user-data.model";
import {UserDataService} from "../../services/user-data.service";

@Component({
  selector: 'app-users-department',
  styleUrls: ['./users-department.component.scss'],
  templateUrl: './users-department.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersDepartmentComponent {
  private _mainSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  private _detailsSubject: Subject<UserDataModel> = new Subject<UserDataModel>();
  public details$: Observable<UserDataModel> = this._detailsSubject.asObservable();
  readonly data$: Observable<UserDataModel[]> = this._mainSubject.asObservable().pipe(switchMap(() => this._usersService.getAll()));

  public _detailsSiblings$: Observable<UserDataModel[]> = combineLatest(this.data$, this.details$).pipe(
    map(([users, selected]) => {
      return users.filter(x => x.departmentId == selected.departmentId && x.id != selected.id);
    }));

  onDetailsButtonClicked(selected: UserDataModel) {
    this._detailsSubject.next(selected);
  }
  constructor(private _usersService: UserDataService) {

  }
}
