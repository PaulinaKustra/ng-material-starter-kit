import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-email',
  styleUrls: ['./email.component.scss'],
  templateUrl: './email.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailComponent {
  readonly emailForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email]) });

  onEmailFormSubmitted(emailForm: FormGroup): void {
  }
}
