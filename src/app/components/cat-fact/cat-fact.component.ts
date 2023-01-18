import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, Observable, switchMap} from 'rxjs';
import {CatFactModel} from '../../models/cat-fact.model';
import {CatFactService} from '../../services/cat-fact.service';

@Component({
  selector: 'app-cat-fact',
  styleUrls: ['./cat-fact.component.scss'],
  templateUrl: './cat-fact.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatFactComponent {
  _refreshCatFactSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);

  readonly catFact$: Observable<CatFactModel> = this._refreshCatFactSubject.asObservable().pipe(switchMap(() => this._catFactService.getSingleFact()));


  onRefreshButtonClicked() {
    this._catFactService.getSingleFact().subscribe(() => this._refreshCatFactSubject.next());
  }

  constructor(private _catFactService: CatFactService) {
  }
}
