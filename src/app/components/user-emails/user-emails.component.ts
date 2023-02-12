import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, combineLatest, map, Observable, of} from 'rxjs';
import {UserModel} from '../../models/user.model';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-emails',
  styleUrls: ['./user-emails.component.scss'],
  templateUrl: './user-emails.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserEmailsComponent {
  private _sortedUsersSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public sortedUsers$: Observable<string> = this._sortedUsersSubject.asObservable();

  readonly sortingOrder$: Observable<string[]> = of(['asc', 'desc']);

  readonly users$: Observable<UserModel[]> = combineLatest([
    this._userService.getAll(),
    this.sortedUsers$
  ]).pipe(
    map(([users, sortedUsers]) => {
      if (sortedUsers === '')
        return users;
      return users.sort((a, b) => {
        if (sortedUsers === 'asc') {
          return a.email?.toUpperCase() > b.email?.toUpperCase() ? 1 : -1;
        } else {
          return a.email?.toUpperCase() < b.email?.toUpperCase() ? 1 : -1;
        }
      })
    }))


  constructor(private _userService: UserService) {
  }

  onSortingChanged(item: string): void {
    this._sortedUsersSubject.next(item);
  }
}
