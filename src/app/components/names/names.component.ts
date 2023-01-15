import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-names',
  styleUrls: ['./names.component.scss'],
  templateUrl: './names.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NamesComponent {
    name = new FormControl('', [Validators.required, Validators.minLength(3)]);

}
