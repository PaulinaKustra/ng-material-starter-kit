import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-email',
  styleUrls: ['./email.component.scss'],
  templateUrl: './email.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailComponent {
    email = new FormControl('', [Validators.email, Validators.required]);

}
