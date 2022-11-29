import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginFormService } from '../../services/login-form.service';

@Component({
  selector: 'app-login-form',
  styleUrls: ['./login-form.component.scss'],
  templateUrl: './login-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {
  readonly loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  constructor(private _loginFormService: LoginFormService) {
  }

  onLoginFormSubmitted(loginForm: FormGroup): void {
    this._loginFormService.create({
      username: loginForm.get('username')?.value,
      password: loginForm.get('password')?.value
    }).subscribe();
  }
}
