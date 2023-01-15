import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-age',
  styleUrls: ['./age.component.scss'],
  templateUrl: './age.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgeComponent {
   age = new FormControl( '',[Validators.min(18)]);

}
