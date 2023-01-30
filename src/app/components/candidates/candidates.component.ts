import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateModel } from '../../models/candidate.model';
import { CandidatesService } from '../../services/candidates.service';

@Component({
  selector: 'app-candidates',
  styleUrls: ['./candidates.component.scss'],
  templateUrl: './candidates.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CandidatesComponent {
  readonly data$: Observable<CandidateModel[]> = this._candidatesService.getAll();


  constructor(private _candidatesService: CandidatesService) {
  }


}
