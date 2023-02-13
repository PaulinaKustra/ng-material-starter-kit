import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, combineLatest, map, Observable} from 'rxjs';
import {UserRoleModel} from '../../models/user-role.model';
import {UserModel} from '../../models/user.model';
import {UserDepartmentModel} from '../../models/user-department.model';
import {UserDepartmentService} from '../../services/user-department.service';
import {UserRoleService} from '../../services/user-role.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-role-department',
  styleUrls: ['./user-role-department.component.scss'],
  templateUrl: './user-role-department.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserRoleDepartmentComponent {
  readonly userRole$: Observable<UserRoleModel[]> = this._userRoleService.getAll();

  readonly userDepartment$: Observable<UserDepartmentModel[]> = this._userDepartmentService.getAll();

  private _selectedRoleSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  private _selectedDepartmentSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  readonly selectedUsers$: Observable<UserModel[]> = combineLatest([
    this._userService.getAll(),
    this._selectedRoleSubject,
    this._selectedDepartmentSubject
  ]).pipe(map(([users, role, department]) => {
    return users.filter(user =>
      (role != 0 ? user.roleId === role : true) &&
      (department != '' ? user.departmentId === +department : true)
    )
  }))

  constructor(
    private _userDepartmentService: UserDepartmentService,
    private _userRoleService: UserRoleService,
    private _userService: UserService) {
  }

  onRoleChanged(role: number): void {
    this._selectedRoleSubject.next(role);
  }

  onDepartmentChanged(department: string): void {
    this._selectedDepartmentSubject.next(department);
  }
}
