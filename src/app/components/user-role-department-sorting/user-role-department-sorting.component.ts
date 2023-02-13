import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, combineLatest, map, Observable, of} from "rxjs";
import {UserRoleModel} from "../../models/user-role.model";
import {UserDepartmentModel} from "../../models/user-department.model";
import {UserModel} from "../../models/user.model";
import {UserDepartmentService} from "../../services/user-department.service";
import {UserRoleService} from "../../services/user-role.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-role-department-sorting',
  styleUrls: ['./user-role-department-sorting.component.scss'],
  templateUrl: './user-role-department-sorting.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserRoleDepartmentSortingComponent {
  public sortingOrder$ = of(['asc', 'desc']);

  readonly userRole$: Observable<UserRoleModel[]> =
    this._userRoleService.getAll();

  readonly userDepartment$: Observable<UserDepartmentModel[]> =
    this._userDepartmentService.getAll();

  private _selectedRoleSubject: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);

  private _selectedDepartmentSubject: BehaviorSubject<string | undefined> =
    new BehaviorSubject<string| undefined>(undefined);

  private _selectedOrderSubject: BehaviorSubject<string | undefined> =
    new BehaviorSubject<string | undefined>(undefined);

  readonly selectedUsers$: Observable<UserModel[]> = combineLatest([
    this._userService.getAll(),
    this._selectedRoleSubject,
    this._selectedDepartmentSubject,
    this._selectedOrderSubject
  ]).pipe(map(([users, role, department, orderBy]) => {
    users = users.filter(user =>
      (role !== 0 ? user.roleId === role : true) &&
      (department ? user.departmentId === +department : true)
    )
      if(orderBy) {
        return users.sort((a, b) => {
          if (orderBy === 'asc') {
            return a.email?.toUpperCase() > b.email?.toUpperCase() ? 1 : -1;
          } else {
            return a.email?.toUpperCase() < b.email?.toUpperCase() ? 1 : -1;
          }
        })
      }
      return users;
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

  onOrderChanged(order: string): void {
    this._selectedOrderSubject.next(order);
  }
}
