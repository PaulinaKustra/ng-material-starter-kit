import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import { UsersModel } from '../../models/users.model';
import { UsersService } from '../../services/users.service';
import {UserPostModel} from "../../models/user-post.model";

@Component({
  selector: 'app-users-radio',
  styleUrls: ['./users-radio.component.scss'],
  templateUrl: './users-radio.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersRadioComponent {
  readonly userRoles$: Observable<UsersModel[]> = this._usersService.getAllRoles();
  readonly usersRadio: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required])
  });


  constructor(private _usersService: UsersService) {
  }

  onUsersRadioSubmitted(): void {
    let user : UserPostModel= {
      email: this.usersRadio.get('email')?.value,
      roleId: this.usersRadio.get('roleId')?.value,
    } as UserPostModel;
    this._usersService.submit(user);
  }
}
