import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-emails',
  styleUrls: ['./user-emails.component.scss'],
  templateUrl: './user-emails.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserEmailsComponent {
  constructor(private _userService: UserService) {
  }
}
