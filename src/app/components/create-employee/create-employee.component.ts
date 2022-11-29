import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CreateEmployeeService } from '../../services/create-employee.service';

@Component({
  selector: 'app-create-employee',
  styleUrls: ['./create-employee.component.scss'],
  templateUrl: './create-employee.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateEmployeeComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl(),
    salary: new FormControl(),
    age: new FormControl()
  });

  constructor(private _createEmployeeService: CreateEmployeeService) {
  }

  onEmployeeFormSubmitted(employeeForm: FormGroup): void {
    this._createEmployeeService.create({
      name: employeeForm.get('name')?.value,
      salary: employeeForm.get('salary')?.value,
      age: employeeForm.get('age')?.value
    }).subscribe();
  }
}
