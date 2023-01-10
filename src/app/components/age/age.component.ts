import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-age',
  styleUrls: ['./age.component.scss'],
  templateUrl: './age.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgeComponent {
  readonly ageForm: FormGroup = new FormGroup({
    age: new FormControl( '',[Validators.min(18)])
  });


  onAgeFormSubmitted(ageForm: FormGroup): void {
  }
}
