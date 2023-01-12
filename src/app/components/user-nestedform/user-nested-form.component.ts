import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import {NestedUserModel} from "../../models/nested-user.model";

@Component({
  selector: 'app-user-nestedform',
  styleUrls: ['./user-nested-form.component.scss'],
  templateUrl: './user-nested-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserNestedFormComponent {


  readonly nameForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required])
  })
  readonly geolocationForm: FormGroup = new FormGroup({
    lat: new FormControl('', [Validators.required]),
    long: new FormControl('', [Validators.required])
  })
  readonly addressForm: FormGroup = new FormGroup({
    city: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required]),
    zipcode: new FormControl('', [Validators.required]),
    geolocation: this.geolocationForm
  })
  readonly usersForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    name: this.nameForm,
    address: this.addressForm,
    phoneInput: new FormControl('', [Validators.required])
  });

  constructor(private _usersService: UsersService) {
  }

  onUsersFormSubmitted(usersForm: FormGroup): void {
    let user : NestedUserModel= {
      email: this.usersForm.get('email')?.value,
      username: this.usersForm.get('username')?.value,
      password: this.usersForm.get('password')?.value,
      phone: this.usersForm.get('phoneInput')?.value,
      name :{
        firstName: this.nameForm.get('firstName')?.value,
        lastName: this.nameForm.get('lastName')?.value,
      },
      address: {
        city: this.addressForm.get('city')?.value,
        street: this.addressForm.get('street')?.value,
        number: this.addressForm.get('number')?.value,
        zipcode: this.addressForm.get('zipcode')?.value,
        geolocation: {
          lat: this.geolocationForm.get('lat')?.value,
          long: this.geolocationForm.get('long')?.value,
        }
      }
    } as NestedUserModel;
console.log('user ', JSON.stringify(user))


    this._usersService.submitNestedForm(user);

  }

}
