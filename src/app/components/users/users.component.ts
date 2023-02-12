import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, map, Observable, switchMap} from 'rxjs';
import { UserRoleModel } from '../../models/user-role.model';
import { UserModel } from '../../models/user.model';
import { UserRoleService } from '../../services/user-role.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  styleUrls: ['./users.component.scss'],
  templateUrl: './users.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent {
  private _selectedRoleSubject: BehaviorSubject<UserRoleModel | undefined> =
    new BehaviorSubject<UserRoleModel | undefined>(undefined);

  public selectedRole$: Observable<UserRoleModel | undefined>
    = this._selectedRoleSubject.asObservable();

  readonly roles$: Observable<UserRoleModel[]> = this._userRoleService.getAll();

  readonly users$: Observable<UserModel[]> = this.selectedRole$.pipe(
    switchMap((selectedRole) => {
      if(selectedRole) {
        console.log('selectedRole', selectedRole)
        return this._userService.getAll().pipe(map((users) =>
          users.filter(user=>user.roleId==selectedRole.id)));
      }
      return this._userService.getAll()
    }));

  constructor(
    private _userRoleService: UserRoleService,
    private _userService: UserService) {

  }

  onFilteringChanged(item: UserRoleModel): void {
    this._selectedRoleSubject.next(item);
  }
}
