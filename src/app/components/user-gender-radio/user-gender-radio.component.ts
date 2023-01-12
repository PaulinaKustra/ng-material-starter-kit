import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { UsersService } from '../../services/users.service';
import {UserPostModel} from "../../models/user-post.model";

@Component({
  selector: 'app-user-gender-radio',
  styleUrls: ['./user-gender-radio.component.scss'],
  templateUrl: './user-gender-radio.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserGenderRadioComponent {
  submitted = true;

  readonly genderData$: Observable<string[]> = gender;
  readonly userData: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    gender: new FormControl('male', [Validators.required])
  });

  constructor(private _usersService: UsersService) {
  }

  onUserDataSubmitted(userData: FormGroup): void {
    let user : UserPostModel= {
      email: this.userData.get('email')?.value,
      roleId: this.userData.get('roleId')?.value,
    } as UserPostModel;
    this._usersService.submit(user);
  }
}
const gender = of(["male", "female"]);
