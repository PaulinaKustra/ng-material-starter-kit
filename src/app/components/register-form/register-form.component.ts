import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterFormService } from '../../services/register-form.service';

@Component({
  selector: 'app-register-form',
  styleUrls: ['./register-form.component.scss'],
  templateUrl: './register-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormComponent {
  readonly registerForm: FormGroup = new FormGroup({
    email: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    name: new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
    }),
    address: new FormGroup({
      city: new FormControl(),
      street: new FormControl(),
      number: new FormControl(),
      zipcode: new FormControl(),
      geolocation: new FormGroup({
        lat: new FormControl(),
        long: new FormControl(),
      }),
    }),
    phone: new FormControl()
  });


  constructor(private _registerFormService: RegisterFormService) {
  }

  onRegisterSubmitted(registerForm: FormGroup): void {
    this._registerFormService.create({
      email: registerForm.get('email')?.value,
      username: registerForm.get('username')?.value,
      password: registerForm.get('password')?.value,
      name: registerForm.get('name')?.value,
      address: registerForm.get('address')?.value,
      phone: registerForm.get('phone')?.value,

    }).subscribe();
  }

}
