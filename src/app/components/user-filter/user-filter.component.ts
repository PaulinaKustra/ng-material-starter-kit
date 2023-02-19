import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, combineLatest, map, shareReplay, startWith } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { DepartmentModel } from '../../models/department.model';
import { RoleModel } from '../../models/role.model';
import { UserService } from '../../services/user.service';
import { RoleService } from '../../services/role.service';
import { DepartmentsService } from '../../services/departments.service';

@Component({
  selector: 'app-user-filter',
  styleUrls: ['./user-filter.component.scss'],
  templateUrl: './user-filter.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFilterComponent {
  readonly users$: Observable<UserModel[]> = this._userService.getAll();
  readonly departments$: Observable<DepartmentModel[]> = this._departmentsService.getAll().pipe(shareReplay(1));
  readonly roles$: Observable<RoleModel[]> = this._roleService.getAll().pipe(shareReplay(1));

  readonly sortingForm: FormGroup = new FormGroup({
    role: new FormControl(),
    department: new FormControl()
  });

  readonly usersSorted$: Observable<{ email: string, roleName: string, departmentName: string, id: string }[]> = combineLatest([
    this._userService.getAll(),
    this.sortingForm.valueChanges.pipe(startWith({ department: undefined, role: undefined })),
    this.roles$,
    this.departments$,
  ]).pipe(
    map(([users, filters, roles, departments]: [UserModel[], { role: string | undefined, department: string  | undefined}, RoleModel[], DepartmentModel[]]) => {
      return users.map(user => {
        return {
          email: user.email,
          roleName: roles.find(role => role.id == user.roleId)?.role ?? 'Not found',
          departmentName: departments.find(department => department.id === user.departmentId?.toString())?.name ?? 'Not found',
          id: user.id
        }
      }).filter((user) => (filters.department ? user.departmentName === filters.department : true)
        && (filters.role ? user.roleName === filters.role : true));
    })
  );

  constructor(
    private _userService: UserService,
    private _roleService: RoleService,
    private _departmentsService: DepartmentsService) {
  }


}
