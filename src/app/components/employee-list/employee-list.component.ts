import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeeListService } from '../../services/employee-list.service';

@Component({
  selector: 'app-employee-list',
  styleUrls: ['./employee-list.component.scss'],
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {
  readonly data$: Observable<EmployeeModel[]> = this._employeeListService.getAll();

  constructor(private _employeeListService: EmployeeListService) {
  }
}
