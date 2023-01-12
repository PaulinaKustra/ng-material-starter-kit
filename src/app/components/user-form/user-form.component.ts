import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UsersModel } from '../../models/users.model';
import { UsersService } from '../../services/users.service';
import {UserPostModel} from "../../models/user-post.model";

@Component({
  selector: 'app-user-form',
  styleUrls: ['./user-form.component.scss'],
  templateUrl: './user-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent {
  readonly userRoles$: Observable<UsersModel[]> = this._usersService.getAll();
  readonly userForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    roleId: new FormControl('', [Validators.required]),
  });


  constructor(private _usersService: UsersService) {
  }

  onUserFormSubmitted(): void {
    let user : UserPostModel= {
      email: this.userForm.get('email')?.value,
      roleId: this.userForm.get('roleId')?.value,
    } as UserPostModel;
    this._usersService.submit(user);
  }
}
