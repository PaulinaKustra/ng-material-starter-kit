import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { UsersModel } from '../../models/users.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-roles-form',
  styleUrls: ['./user-roles-form.component.scss'],
  templateUrl: './user-roles-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserRolesFormComponent {
  readonly userRoles$: Observable<UsersModel[]> = this._usersService.getAllRoles();
  readonly userRoles: FormGroup = new FormGroup({
    userRole: new FormControl('', [Validators.required])
  });
  constructor(private _usersService: UsersService) {

  }
}
